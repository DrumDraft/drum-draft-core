import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePatternDto, UpdatePatternDto } from './dto';
import { PatternsService } from './patterns.service';

@Controller('patterns')
export class PatternsController {
  constructor(private readonly patternsService: PatternsService) {}

  @Post()
  create(@Body() dto: CreatePatternDto) {
    return this.patternsService.create(dto);
  }

  @Get()
  findAll() {
    return this.patternsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') patternId: string, @Body() dto: UpdatePatternDto) {
    return this.patternsService.update(parseInt(patternId), dto);
  }

  @Delete(':id')
  delete(@Param('id') patternId: string) {
    return this.patternsService.delete(parseInt(patternId));
  }
}
