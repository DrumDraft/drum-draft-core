import { IsArray, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Beat } from '../types/beat';

export class CreatePatternDto {
  @IsNumber()
  signatureBits: number;

  @IsNumber()
  @IsIn([4, 8])
  signatureMeasure: number;

  @IsArray()
  beats: Beat[];

  @IsArray()
  @IsOptional()
  tags?: string[];
}

export class UpdatePatternDto extends CreatePatternDto {}
