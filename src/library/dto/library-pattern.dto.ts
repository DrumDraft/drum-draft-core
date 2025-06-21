import { Pattern } from '@/patterns/types/pattern';
import { Expose } from 'class-transformer';

export class LibraryPatternDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  isPublic: boolean;

  @Expose()
  pattern: Pattern;
}
