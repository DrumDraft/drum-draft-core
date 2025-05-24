import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { Beat } from '../types';

export class UpdatePatternDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  signatureBits: number;

  @IsNumber()
  signatureMeasure: number;

  @IsArray()
  beats: Beat[];
}
