import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class PatternIdDto {
  @IsString()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  id: number;
}
