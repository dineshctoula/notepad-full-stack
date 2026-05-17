import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepo: Repository<Note>,
  ) {}

  create(title: string, content: string, userId: number) {
    const note = this.noteRepo.create({ title, content, userId });
    return this.noteRepo.save(note);
  }

  findAll(userId: number) {
    return this.noteRepo.find({ where: { userId } });
  }

  delete(id: number) {
    return this.noteRepo.delete(id);
  }
}