import { Injectable } from '@nestjs/common';
import { NoteI } from './interfaces/note.interface';

@Injectable()
export class NotesService {
  getAllNotes() {
    return `All notes`;
  }

  getNote(id: string) {
    return `Get one note`;
  }

  createNote(note: NoteI) {
    return `New note created`;
  }

  updateNote(id: string, note: NoteI) {
    return `New note updated`;
  }

  deleteNote(id: string) {
    return `Note deleted`;
  }
}
