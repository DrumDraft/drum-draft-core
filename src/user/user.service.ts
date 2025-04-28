import { PrismaService } from '@/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserType } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, name, type = UserType.USER } = createUserDto;

    return this.prisma.user.create({
      data: {
        email,
        password, // В реальном приложении здесь должна быть хеширование пароля
        name,
        type,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // Проверяем, существует ли пользователь
    await this.findOne(id);

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<User> {
    // Проверяем, существует ли пользователь
    await this.findOne(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
