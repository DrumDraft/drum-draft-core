import { Beat } from '@/patterns/types/beat';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLibraryPatternDto {
  @IsString()
  title: string;

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

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
