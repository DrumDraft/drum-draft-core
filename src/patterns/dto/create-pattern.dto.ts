import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { SignatureMeasure } from '../../../generated/prisma/client';
import { Beat } from '../types/beat';

export class CreatePatternDto {
  @IsNumber()
  signatureBits: number;

  @IsNumber()
  signatureMeasure: SignatureMeasure;

  @IsArray()
  beats: Beat[];

  @IsArray()
  @IsOptional()
  tags?: string[];
}

export class UpdatePatternDto extends CreatePatternDto {}
