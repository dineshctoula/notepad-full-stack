import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [];

  private idCounter = 1;

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(
      (user) => user.email === email,
    );
  }

  async create(data: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: this.idCounter++,
      ...data,
    };

    this.users.push(newUser);

    return newUser;
  }
}