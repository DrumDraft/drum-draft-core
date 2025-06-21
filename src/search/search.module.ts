import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { LshService } from './lsh.service';
import { PatternVectorService } from './pattern-vector.service';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SearchController],
  providers: [SearchService, LshService, PatternVectorService],
  exports: [SearchService, LshService, PatternVectorService],
})
export class SearchModule {}
