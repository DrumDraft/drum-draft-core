import { PrismaService } from '@/database/prisma.service';
import { PatternsService } from '@/patterns/patterns.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {
  CreateLibraryPatternDto,
  LibraryPatternDto,
  UpdateLibraryPatternDto,
} from './dto';

@Injectable()
export class LibraryService {
  constructor(
    private patternService: PatternsService,
    private prisma: PrismaService,
  ) {}

  async create(dto: CreateLibraryPatternDto, userId: number) {
    // Создаем паттерн через сервис паттернов
    const createdPattern = await this.patternService.create(
      {
        signatureBits: dto.signatureBits,
        signatureMeasure: dto.signatureMeasure,
        beats: dto.beats,
        tags: dto.tags,
      },
      {
        library: {
          userId,
          title: dto.title,
          isPublic: dto.isPublic ?? false,
        },
      },
    );

    // Получаем созданный паттерн в нужном формате
    const libraryPattern = await this.prisma.libraryPattern.findFirst({
      where: {
        userId,
        patternId: createdPattern.id,
      },
      select: {
        id: true,
        title: true,
        isPublic: true,
        pattern: {
          select: {
            id: true,
            signatureBits: true,
            signatureMeasure: true,
            beats: true,
            createdAt: true,
            updatedAt: true,
            tags: {
              select: {
                tag: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!libraryPattern) {
      throw new NotFoundException('Created pattern not found');
    }

    return plainToInstance(LibraryPatternDto, {
      ...libraryPattern,
      pattern: {
        ...libraryPattern.pattern,
        tags: libraryPattern.pattern.tags.map((t) => t.tag.name),
      },
    });
  }

  async createEmpty(userId: number) {
    return this.create(
      {
        signatureBits: 4,
        signatureMeasure: 4,
        beats: [],
        tags: [],
        title: 'Без названия',
      },
      userId,
    );
  }

  async findAllByUser(userId: number) {
    const libraryPatterns = await this.prisma.libraryPattern.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        title: true,
        isPublic: true,
        pattern: {
          select: {
            id: true,
            signatureBits: true,
            signatureMeasure: true,
            beats: true,
            createdAt: true,
            updatedAt: true,
            tags: {
              select: {
                tag: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return libraryPatterns.map((libraryPattern) =>
      plainToInstance(LibraryPatternDto, {
        ...libraryPattern,
        pattern: {
          ...libraryPattern.pattern,
          tags: libraryPattern.pattern.tags.map((t) => t.tag.name),
        },
      }),
    );
  }

  async findOneByUser(patternId: number, userId: number) {
    const lp = await this.prisma.libraryPattern.findFirst({
      where: {
        userId,
        patternId,
      },
      select: {
        id: true,
        title: true,
        isPublic: true,
        pattern: {
          select: {
            id: true,
            signatureBits: true,
            signatureMeasure: true,
            beats: true,
            createdAt: true,
            updatedAt: true,
            tags: {
              select: {
                tag: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!lp) {
      throw new NotFoundException('Pattern not found');
    }

    return plainToInstance(LibraryPatternDto, {
      ...lp,
      pattern: {
        ...lp.pattern,
        tags: lp.pattern.tags.map((t) => t.tag.name),
      },
    });
  }

  async update(patternId: number, dto: UpdateLibraryPatternDto, userId: number) {
    const libraryPattern = await this.findOneByUser(patternId, userId);

    const updated = await this.prisma.libraryPattern.update({
      where: {
        id: libraryPattern.id,
      },
      data: {
        title: dto.title,
      },
      select: {
        id: true,
        title: true,
        isPublic: true,
        pattern: {
          select: {
            id: true,
            signatureBits: true,
            signatureMeasure: true,
            beats: true,
            createdAt: true,
            updatedAt: true,
            tags: {
              select: {
                tag: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return plainToInstance(LibraryPatternDto, {
      ...updated,
      pattern: {
        ...updated.pattern,
        tags: updated.pattern.tags.map((t) => t.tag.name),
      },
    });
  }

  async delete(patternId: number, userId: number) {
    const libraryPattern = await this.findOneByUser(patternId, userId);

    return this.prisma.libraryPattern.delete({
      where: {
        id: libraryPattern.id,
      },
    });
  }
}
