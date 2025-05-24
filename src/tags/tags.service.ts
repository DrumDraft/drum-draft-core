import { PrismaService } from '@/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTagDto) {
    return this.prisma.tag.create({
      data: {
        name: dto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number) {
    const tag = await this.prisma.tag.findUnique({
      where: { id },
    });

    if (!tag) {
      throw new NotFoundException('Тег не найден');
    }

    return tag;
  }

  async findOrCreate(name: string) {
    const tag = await this.prisma.tag.findFirst({
      where: { name },
    });

    if (tag) {
      return tag;
    }

    return this.create({ name });
  }

  async findOrCreateMany(names: string[]) {
    const tags = await Promise.all(names.map((name) => this.findOrCreate(name)));
    return tags;
  }

  async delete(id: number) {
    await this.findOne(id);
    return this.prisma.tag.delete({
      where: { id },
    });
  }
}
