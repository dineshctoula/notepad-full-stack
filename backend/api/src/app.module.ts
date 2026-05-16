import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';
import { Notes~Controller } from './clear/notes~/notes~.controller';
import { NotesService } from './notes/notes.service';
import { NotesModule } from './notes/notes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123',
      database: 'notepad',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    NotesModule,
  ],
  providers: [NotesService],
  controllers: [Notes~Controller],
})
export class AppModule {}