import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
// hamro base routes chae notes ho  
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  create(@Body() body: any) {
    return this.notesService.create(body.title, body.content, body.userId);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: number) {
    return this.notesService.findAll(userId);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.notesService.delete(id);
  }
}