import { PrismaService } from '@/database/prisma.service';
import { Beat } from '@/patterns/types/beat';
import { Injectable, Logger } from '@nestjs/common';
import { LshService } from './lsh.service';
import { PatternVectorService } from './pattern-vector.service';

export interface SearchResult {
  patternId: number;
  similarity: number;
  metadata?: {
    title?: string;
    tags?: string[];
    signatureBits?: number;
    signatureMeasure?: number;
  };
}

export interface SearchOptions {
  limit?: number;
  minSimilarity?: number;
  maxHammingDistance?: number;
}

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);

  constructor(
    private prisma: PrismaService,
    private lshService: LshService,
    private patternVectorService: PatternVectorService,
  ) {}

  /**
   * Индексирует паттерн для поиска (создает грув-вектор и LSH хеш)
   */
  async indexPattern(patternId: number): Promise<void> {
    try {
      const pattern = await this.prisma.pattern.findUnique({
        where: { id: patternId },
        include: { tags: true },
      });

      if (!pattern) {
        throw new Error(`Pattern with id ${patternId} not found`);
      }

      const beats = pattern.beats as unknown as Beat[];

      if (!this.patternVectorService.validatePattern(beats)) {
        throw new Error(`Invalid pattern data for pattern ${patternId}`);
      }

      // Вычисляем грув-вектор
      const grooveVector = this.patternVectorService.patternToGrooveVector(beats);

      // Нормализуем вектор
      const normalizedVector = this.lshService.normalizeVector(grooveVector);

      // Генерируем LSH хеш
      const hyperplaneHash = this.lshService.generateHash(normalizedVector);

      // Сохраняем или обновляем данные поиска
      await this.prisma.patternSearchData.upsert({
        where: { patternId },
        update: {
          grooveVector: normalizedVector,
          hyperplaneHash,
        },
        create: {
          patternId,
          grooveVector: normalizedVector,
          hyperplaneHash,
        },
      });

      this.logger.log(`Indexed pattern ${patternId}`);
    } catch (error) {
      this.logger.error(`Failed to index pattern ${patternId}:`, error);
      throw error;
    }
  }

  /**
   * Поиск похожих паттернов
   */
  async searchSimilarPatterns(
    queryBeats: Beat[],
    options: SearchOptions = {},
  ): Promise<SearchResult[]> {
    const {
      limit = 50,
      minSimilarity = 0.1,
      maxHammingDistance = 16, // Максимальное хеммингово расстояние для предварительного отбора
    } = options;

    try {
      // Валидируем входной паттерн
      if (!this.patternVectorService.validatePattern(queryBeats)) {
        throw new Error('Invalid query pattern');
      }

      // Вычисляем грув-вектор для запроса
      const queryGrooveVector = this.patternVectorService.patternToGrooveVector(queryBeats);
      const queryNormalizedVector = this.lshService.normalizeVector(queryGrooveVector);
      const queryHash = this.lshService.generateHash(queryNormalizedVector);

      // Предварительный отбор кандидатов по LSH хешу
      const candidates = await this.findCandidatesByHash(queryHash, maxHammingDistance);

      if (candidates.length === 0) {
        return [];
      }

      // Точное ранжирование по косинусной схожести
      const results = await this.rankBySimilarity(queryNormalizedVector, candidates, minSimilarity);

      // Получаем метаданные для топ результатов
      const topResults = results.slice(0, limit);
      const enrichedResults = await this.enrichWithMetadata(topResults);

      return enrichedResults;
    } catch (error) {
      this.logger.error('Search failed:', error);
      throw error;
    }
  }

  /**
   * Предварительный отбор кандидатов по LSH хешу
   */
  private async findCandidatesByHash(
    queryHash: number[],
    maxHammingDistance: number,
  ): Promise<Array<{ patternId: number; grooveVector: number[] }>> {
    // Получаем все индексированные паттерны
    const allPatterns = await this.prisma.patternSearchData.findMany({
      select: {
        patternId: true,
        grooveVector: true,
        hyperplaneHash: true,
      },
    });

    // Фильтруем по хеммингову расстоянию
    const candidates = allPatterns.filter((pattern) => {
      const hammingDistance = this.lshService.hammingDistance(queryHash, pattern.hyperplaneHash);
      return hammingDistance <= maxHammingDistance;
    });

    return candidates.map(({ patternId, grooveVector }) => ({
      patternId,
      grooveVector,
    }));
  }

  /**
   * Ранжирование кандидатов по косинусной схожести
   */
  private async rankBySimilarity(
    queryVector: number[],
    candidates: Array<{ patternId: number; grooveVector: number[] }>,
    minSimilarity: number,
  ): Promise<SearchResult[]> {
    const results: SearchResult[] = [];

    for (const candidate of candidates) {
      const similarity = this.lshService.cosineSimilarity(queryVector, candidate.grooveVector);

      if (similarity >= minSimilarity) {
        results.push({
          patternId: candidate.patternId,
          similarity,
        });
      }
    }

    // Сортируем по убыванию схожести
    return results.sort((a, b) => b.similarity - a.similarity);
  }

  /**
   * Обогащает результаты метаданными
   */
  private async enrichWithMetadata(results: SearchResult[]): Promise<SearchResult[]> {
    if (results.length === 0) return results;

    const patternIds = results.map((r) => r.patternId);

    const patterns = await this.prisma.pattern.findMany({
      where: { id: { in: patternIds } },
      include: {
        tags: { include: { tag: true } },
        libraryPatterns: { select: { title: true } },
      },
    });

    const patternMap = new Map(patterns.map((p) => [p.id, p]));

    return results.map((result) => {
      const pattern = patternMap.get(result.patternId);
      if (!pattern) return result;

      return {
        ...result,
        metadata: {
          title: pattern.libraryPatterns[0]?.title,
          tags: pattern.tags.map((pt) => pt.tag.name),
          signatureBits: pattern.signatureBits,
          signatureMeasure: pattern.signatureMeasure,
        },
      };
    });
  }

  /**
   * Индексирует все существующие паттерны
   */
  async indexAllPatterns(): Promise<void> {
    const patterns = await this.prisma.pattern.findMany({
      select: { id: true },
    });

    this.logger.log(`Starting indexing of ${patterns.length} patterns`);

    for (const pattern of patterns) {
      try {
        await this.indexPattern(pattern.id);
      } catch (error) {
        this.logger.error(`Failed to index pattern ${pattern.id}:`, error);
      }
    }

    this.logger.log('Indexing completed');
  }

  /**
   * Получает статистику индексации
   */
  async getIndexStats(): Promise<{
    totalPatterns: number;
    indexedPatterns: number;
    indexCoverage: number;
  }> {
    const [totalPatterns, indexedPatterns] = await Promise.all([
      this.prisma.pattern.count(),
      this.prisma.patternSearchData.count(),
    ]);

    return {
      totalPatterns,
      indexedPatterns,
      indexCoverage: totalPatterns > 0 ? (indexedPatterns / totalPatterns) * 100 : 0,
    };
  }
}
