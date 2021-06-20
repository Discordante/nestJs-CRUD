import { Injectable } from '@nestjs/common';
import { NoteI } from './interfaces/note.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotesService {
  constructor(@InjectModel('Note') private readonly noteModel: Model<NoteI>) {}
  async getAllNotes(): Promise<NoteI[]> {
    return await this.noteModel.find();
  }

  async getNote(id: string): Promise<NoteI> {
    return await this.noteModel.findById(id);
  }

  async createNote(note: NoteI): Promise<NoteI> {
    const newNote = new this.noteModel(note);
    return await newNote.save();
  }

  async updateNote(id: string, note: NoteI): Promise<NoteI> {
    return await this.noteModel.findByIdAndUpdate(id, note, { new: true });
  }

  async deleteNote(id: string): Promise<NoteI> {
    return await this.noteModel.findByIdAndDelete(id);
  }
}
