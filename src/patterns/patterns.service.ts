import { PrismaService } from '@/database/prisma.service';
import { TagsService } from '@/tags/tags.service';
import { Injectable } from '@nestjs/common';
import { JsonArray } from 'generated/prisma/client/runtime/library';
import { CreatePatternDto, UpdatePatternDto } from './dto';

@Injectable()
export class PatternsService {
  constructor(
    private prisma: PrismaService,
    private tagsService: TagsService,
  ) {}

  async create(
    dto: CreatePatternDto,
    options: {
      library?: {
        userId: number;
        title: string;
        isPublic?: boolean;
      };
    } = {},
  ) {
    const { library } = options;

    const pattern = await this.prisma.pattern.create({
      data: {
        signatureBits: dto.signatureBits,
        signatureMeasure: dto.signatureMeasure,
        beats: dto.beats as unknown as JsonArray,
        ...(library && {
          library: {
            create: {
              userId: library.userId,
              title: library.title,
              isPublic: library.isPublic ?? false,
            },
          },
        }),
      },
    });

    if (dto.tags?.length) {
      const tags = await this.tagsService.findOrCreateMany(dto.tags);
      await this.prisma.pattern.update({
        where: { id: pattern.id },
        data: {
          tags: {
            connect: tags.map((tag) => ({
              patternId_tagId: {
                patternId: pattern.id,
                tagId: tag.id,
              },
            })),
          },
        },
      });
    }

    return this.prisma.pattern.findUnique({
      where: { id: pattern.id },
      include: {
        tags: true,
        library: true,
      },
    });
  }

  async findOne(patternId: number) {
    return this.prisma.pattern.findUnique({
      where: { id: patternId },
      include: {
        tags: true,
      },
    });
  }

  async findAll() {
    return this.prisma.pattern.findMany({
      include: {
        tags: true,
      },
    });
  }

  async update(patternId: number, dto: UpdatePatternDto) {
    const pattern = await this.prisma.pattern.update({
      where: { id: patternId },
      data: {
        signatureBits: dto.signatureBits,
        signatureMeasure: dto.signatureMeasure,
        beats: dto.beats as unknown as JsonArray,
      },
    });

    if (dto.tags?.length) {
      const tags = await this.tagsService.findOrCreateMany(dto.tags);
      await this.prisma.pattern.update({
        where: { id: pattern.id },
        data: {
          tags: {
            set: tags.map((tag) => ({
              patternId_tagId: {
                patternId: pattern.id,
                tagId: tag.id,
              },
            })),
          },
        },
      });
    }

    return this.prisma.pattern.findUnique({
      where: { id: pattern.id },
      include: {
        tags: true,
      },
    });
  }

  async delete(patternId: number) {
    return this.prisma.pattern.delete({
      where: { id: patternId },
    });
  }
}
