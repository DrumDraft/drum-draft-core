import { PasswordService } from '@/auth/password.service';
import { PrismaService } from '@/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Пользователь с id ${id} не найден`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, name } = createUserDto;

    const hashedPassword = await this.passwordService.hashPassword(password);

    return this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findOne(id);

    if (updateUserDto.password) {
      updateUserDto.password = await this.passwordService.hashPassword(updateUserDto.password);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<User> {
    await this.findOne(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
