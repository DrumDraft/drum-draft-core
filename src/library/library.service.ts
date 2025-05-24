import { PrismaService } from '@/database/prisma.service';
import { PatternsService } from '@/patterns/patterns.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SignatureMeasure } from 'generated/prisma/client';
import { CreateLibraryPatternDto, UpdateLibraryPatternDto } from './dto';

@Injectable()
export class LibraryService {
  constructor(
    private patternService: PatternsService,
    private prisma: PrismaService,
  ) {}

  async create(dto: CreateLibraryPatternDto, userId: number) {
    return this.patternService.create(
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
  }

  async createEmpty(userId: number) {
    return this.create(
      {
        signatureBits: 4,
        signatureMeasure: SignatureMeasure.FOUR,
        beats: [],
        tags: [],
        title: 'Без названия',
      },
      userId,
    );
  }

  async findAllByUser(userId: number) {
    return this.prisma.libraryPattern.findMany({
      where: {
        userId: userId,
      },
      include: {
        pattern: {
          include: {
            tags: true,
          },
        },
      },
    });
  }

  async findOneByUser(patternId: number, userId: number) {
    const libraryPattern = await this.prisma.libraryPattern.findFirst({
      where: {
        patternId,
        userId,
      },
      include: {
        pattern: {
          include: {
            tags: true,
          },
        },
      },
    });

    if (!libraryPattern) {
      throw new NotFoundException('Паттерн не найден в вашей библиотеке');
    }

    return libraryPattern;
  }

  async update(patternId: number, dto: UpdateLibraryPatternDto, userId: number) {
    const libraryPattern = await this.findOneByUser(patternId, userId);

    return this.prisma.libraryPattern.update({
      where: {
        id: libraryPattern.id,
      },
      data: {
        title: dto.title,
      },
      include: {
        pattern: {
          include: {
            tags: true,
          },
        },
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
