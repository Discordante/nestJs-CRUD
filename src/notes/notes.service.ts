import { Injectable } from '@nestjs/common';
import { Note } from './interfaces/note.interface';

@Injectable()
export class NotesService {
  getAllNotes() {
    return `All notes`;
  }

  getNote() {
    return `Get one note`;
  }

  createNote() {
    return `New note created`;
  }

  updateNote() {
    return `New note updated`;
  }

  deleteNote() {
    return `Note deleted`;
  }
}
