import { CurrentUserId } from '@/auth/decorators/current-user-id.decorator';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateLibraryPatternDto, UpdateLibraryPatternDto } from './dto';
import { LibraryService } from './library.service';

@Controller('library/patterns')
@UseGuards(JwtAuthGuard)
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post('')
  create(@Body() dto: CreateLibraryPatternDto, @CurrentUserId() userId: number) {
    return this.libraryService.create(dto, userId);
  }

  @Post('new')
  createEmpty(@CurrentUserId() userId: number) {
    return this.libraryService.createEmpty(userId);
  }

  @Get()
  findAll(@CurrentUserId() userId: number) {
    return this.libraryService.findAllByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) patternId: number, @CurrentUserId() userId: number) {
    return this.libraryService.findOneByUser(patternId, userId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) patternId: number,
    @Body() dto: UpdateLibraryPatternDto,
    @CurrentUserId() userId: number,
  ) {
    return this.libraryService.update(patternId, dto, userId);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) patternId: number, @CurrentUserId() userId: number) {
    return this.libraryService.delete(patternId, userId);
  }
}
