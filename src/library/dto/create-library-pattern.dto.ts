import { Beat } from '@/patterns/types/beat';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { SignatureMeasure } from '../../../generated/prisma/client';

export class CreateLibraryPatternDto {
  @IsString()
  title: string;

  @IsNumber()
  signatureBits: number;

  @IsNumber()
  signatureMeasure: SignatureMeasure;

  @IsArray()
  beats: Beat[];

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
