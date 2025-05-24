import { UserService } from '@/user/user.service';
import { isDev } from '@/utils/is-dev.util';
import { ttlToMs } from '@/utils/ttl-to-ms.util';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload, ViewerDto } from './model';
import { PasswordService } from './password.service';
import { MessageResponse } from './types/responses';

import type { CookieOptions, Request, Response } from 'express';
import type { User } from 'generated/prisma/client';
@Injectable()
export class AuthService {
  private readonly JWT_ACCESS_TOKEN_TTL: string;
  private readonly JWT_REFRESH_TOKEN_TTL: string;
  private readonly COOKIE_DOMAIN: string;

  private isDev: boolean;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private passwordService: PasswordService,
  ) {
    this.JWT_ACCESS_TOKEN_TTL = this.configService.getOrThrow<string>('JWT_ACCESS_TOKEN_TTL');
    this.JWT_REFRESH_TOKEN_TTL = this.configService.getOrThrow<string>('JWT_REFRESH_TOKEN_TTL');
    this.COOKIE_DOMAIN = this.configService.getOrThrow<string>('COOKIE_DOMAIN');

    this.isDev = isDev(this.configService);
  }

  async getCurrentUser(req: Request): Promise<ViewerDto> {
    const accessToken = req.cookies['access_token'];

    if (!accessToken) {
      throw new UnauthorizedException('Access token отсутствует');
    }

    const payload = await this.jwtService.verifyAsync<JwtPayload>(accessToken);
    const { id, name, email, isActive } = await this.userService.findOne(Number(payload.id));

    return { id, name, email, isActive };
  }

  async validateJwt(payload: JwtPayload): Promise<User> {
    const user = await this.userService.findOne(Number(payload.id));

    if (!user) {
      throw new UnauthorizedException('Нет пользователя с таким id');
    }

    return user;
  }

  async register(res: Response, registerDto: RegisterDto): Promise<MessageResponse> {
    const existingUser = await this.userService.findByEmail(registerDto.email);

    if (existingUser) {
      throw new ConflictException('Пользователь c таким email уже существует');
    }

    const user = await this.userService.create(registerDto);

    await this.auth(res, user);

    return { message: 'Регистрация успешна' };
  }

  async login(res: Response, loginDto: LoginDto): Promise<MessageResponse> {
    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    await this.auth(res, user);

    return { message: 'Вход выполнен успешно' };
  }

  async refresh(req: Request, res: Response): Promise<MessageResponse> {
    const refreshToken = req.cookies['refresh_token'];

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token отсутствует');
    }

    const payload = await this.jwtService.verifyAsync<JwtPayload>(refreshToken);
    const user = await this.userService.findOne(Number(payload.id));

    if (!user) {
      throw new UnauthorizedException('Нет пользователя с таким id');
    }

    await this.auth(res, user);
    return { message: 'Токены обновлены' };
  }

  async logout(res: Response): Promise<MessageResponse> {
    this.clearCookies(res);
    return { message: 'Вы вышли из аккаунта' };
  }

  private async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    const isPasswordValid = await this.passwordService.comparePasswords(password, user.password);

    if (!user || !isPasswordValid) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    return user;
  }

  private async auth(res: Response, user: User): Promise<void> {
    const { accessToken, refreshToken } = this.generateTokens(user);
    const accessTokenExpires = new Date(Date.now() + ttlToMs(this.JWT_ACCESS_TOKEN_TTL));
    const refreshTokenExpires = new Date(Date.now() + ttlToMs(this.JWT_REFRESH_TOKEN_TTL));
    this.setCookie(res, 'access_token', accessToken, accessTokenExpires);
    this.setCookie(res, 'refresh_token', refreshToken, refreshTokenExpires);
  }

  private generateTokens(user: User) {
    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return { accessToken, refreshToken };
  }

  private setCookie(res: Response, name: string, value: string, expires: Date) {
    const options: CookieOptions = {
      httpOnly: true,
      secure: !this.isDev,
      sameSite: this.isDev ? 'lax' : 'none',
      expires,
      ...(this.isDev ? {} : { domain: this.COOKIE_DOMAIN }),
    };

    res.cookie(name, value, options);
  }

  private clearCookies(res: Response) {
    const options: CookieOptions = {
      httpOnly: true,
      secure: !this.isDev,
      sameSite: this.isDev ? 'lax' : 'none',
      ...(this.isDev ? {} : { domain: this.COOKIE_DOMAIN }),
    };

    res.clearCookie('access_token', options);
    res.clearCookie('refresh_token', options);
  }
}
