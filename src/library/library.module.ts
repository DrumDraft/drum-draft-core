import { PatternsModule } from '@/patterns/patterns.module';
import { TagsModule } from '@/tags/tags.module';
import { Module } from '@nestjs/common';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';

@Module({
  imports: [PatternsModule, TagsModule],
  controllers: [LibraryController],
  providers: [LibraryService],
  exports: [LibraryService],
})
export class LibraryModule {}
