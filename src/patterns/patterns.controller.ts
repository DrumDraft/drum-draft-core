import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
  update(@Param('id', ParseIntPipe) patternId: number, @Body() dto: UpdatePatternDto) {
    return this.patternsService.update(patternId, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) patternId: number) {
    return this.patternsService.delete(patternId);
  }
}
