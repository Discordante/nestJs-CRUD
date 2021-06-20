import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './notes/schemas/note.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-CRUD'),
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }]),
  ],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
