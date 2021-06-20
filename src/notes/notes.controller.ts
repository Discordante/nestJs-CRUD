import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('notes')
export class NotesController {
  @Get()
  getAllNotes(): string {
    return `All notes`;
  }

  @Post()
  createNote(): string {
    return `New note created`;
  }

  @Put(':id')
  updateNote(@Param('id') noteId: string): string {
    return `Note updated ${noteId}`;
  }

  @Delete(':id')
  deleteNote(@Param('id') noteId: string): string {
    return `Note deleted ${noteId}`;
  }
}