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

@Controller('notes')
export class NotesController {
  @Get()
  getAllNotes(): string {
    return `All notes`;
  }

  @Post()
  createNote(@Body() noteDto: CreateNoteDto): string {
    return `New note created ${noteDto.title}`;
  }

  @Put(':id')
  updateNote(
    @Param('id') noteId: string,
    @Body() noteDto: UpdateNoteDto,
  ): string {
    return `Note updated ${noteDto.title}`;
  }

  @Delete(':id')
  deleteNote(@Param('id') noteId: string): string {
    return `Note deleted ${noteId}`;
  }
}
