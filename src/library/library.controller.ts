import { CurrentUserId } from '@/auth/decorators/current-user-id.decorator';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateLibraryPatternDto, UpdateLibraryPatternDto } from './dto';
import { LibraryService } from './library.service';

@Controller('library')
@UseGuards(JwtAuthGuard)
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post('')
  create(@Body() dto: CreateLibraryPatternDto, @CurrentUserId() userId: number) {
    return this.libraryService.create(dto, userId);
  }

  @Post('pattern/new')
  createEmpty(@CurrentUserId() userId: number) {
    return this.libraryService.createEmpty(userId);
  }

  @Get()
  findAll(@CurrentUserId() userId: number) {
    console.log('userId', userId);

    return this.libraryService.findAllByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') patternId: string, @CurrentUserId() userId: number) {
    return this.libraryService.findOneByUser(parseInt(patternId), userId);
  }

  @Patch(':id')
  update(
    @Param('id') patternId: string,
    @Body() dto: UpdateLibraryPatternDto,
    @CurrentUserId() userId: number,
  ) {
    return this.libraryService.update(parseInt(patternId), dto, userId);
  }

  @Delete(':id')
  delete(@Param('id') patternId: string, @CurrentUserId() userId: number) {
    return this.libraryService.delete(parseInt(patternId), userId);
  }
}
