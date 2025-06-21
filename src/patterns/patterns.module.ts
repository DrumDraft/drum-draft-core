import { SearchModule } from '@/search/search.module';
import { TagsModule } from '@/tags/tags.module';
import { Module } from '@nestjs/common';
import { PatternsService } from './patterns.service';

@Module({
  imports: [TagsModule, SearchModule],
  providers: [PatternsService],
  exports: [PatternsService],
})
export class PatternsModule {}
