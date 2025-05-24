import { TagsModule } from '@/tags/tags.module';
import { Module } from '@nestjs/common';
import { PatternsService } from './patterns.service';

@Module({
  imports: [TagsModule],
  providers: [PatternsService],
  exports: [PatternsService],
})
export class PatternsModule {}
