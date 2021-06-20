import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}
  @Get()
  getAllNotes(): string {
    return this.noteService.getAllNotes();
  }

  @Get(':id')
  getNote(@Param('id') noteId: string): string {
    return this.noteService.getNote(noteId);
  }

  @Post()
  createNote(@Body() noteDto: CreateNoteDto): string {
    return this.noteService.createNote(noteDto);
  }

  @Put(':id')
  updateNote(
    @Param('id') noteId: string,
    @Body() noteDto: UpdateNoteDto,
  ): string {
    return this.noteService.updateNote(noteId, noteDto);
  }

  @Delete(':id')
  deleteNote(@Param('id') noteId: string): string {
    return this.noteService.deleteNote(noteId);
  }
}
