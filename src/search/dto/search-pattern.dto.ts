import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';

export class BeatDto {
  @IsNumber()
  position: number;

  @IsArray()
  instruments: Record<string, boolean>;
}

export class SearchPatternDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BeatDto)
  beats: BeatDto[];

  @IsNumber()
  @IsOptional()
  limit?: number;

  @IsNumber()
  @IsOptional()
  minSimilarity?: number;

  @IsNumber()
  @IsOptional()
  maxHammingDistance?: number;
}

export class SearchResponseDto {
  patternId: number;
  similarity: number;
  metadata?: {
    title?: string;
    tags?: string[];
    signatureBits?: number;
    signatureMeasure?: number;
  };
}
