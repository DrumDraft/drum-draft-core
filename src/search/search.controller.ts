import { Beat } from '@/patterns/types/beat';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SearchPatternDto, SearchResponseDto } from './dto/search-pattern.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  /**
   * Поиск похожих паттернов
   */
  @Post()
  @HttpCode(HttpStatus.OK)
  async searchPatterns(@Body() dto: SearchPatternDto): Promise<SearchResponseDto[]> {
    const beats = dto.beats as unknown as Beat[];

    return this.searchService.searchSimilarPatterns(beats, {
      limit: dto.limit,
      minSimilarity: dto.minSimilarity,
      maxHammingDistance: dto.maxHammingDistance,
    });
  }

  /**
   * Индексация конкретного паттерна
   */
  @Post('index/:patternId')
  @HttpCode(HttpStatus.OK)
  async indexPattern(
    @Param('patternId', ParseIntPipe) patternId: number,
  ): Promise<{ success: boolean }> {
    await this.searchService.indexPattern(patternId);
    return { success: true };
  }

  /**
   * Индексация всех паттернов
   */
  @Post('index-all')
  @HttpCode(HttpStatus.OK)
  async indexAllPatterns(): Promise<{ success: boolean }> {
    await this.searchService.indexAllPatterns();
    return { success: true };
  }

  /**
   * Получение статистики индексации
   */
  @Get('stats')
  async getIndexStats(): Promise<{
    totalPatterns: number;
    indexedPatterns: number;
    indexCoverage: number;
  }> {
    return this.searchService.getIndexStats();
  }
}
