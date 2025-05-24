import { UpdatePatternDto } from '@/patterns/dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateLibraryPatternDto extends UpdatePatternDto {
  @IsString()
  title: string;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
