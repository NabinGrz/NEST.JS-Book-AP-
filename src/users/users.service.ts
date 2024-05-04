import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      username: 'Nabin',
      password: 'Admin',
      email: 'nabin@gmail.com',
    },
    {
      username: 'Subin',
      password: 'Admin',
      email: 'subin@gmail.com',
    },
    {
      username: 'Gurung',
      password: 'Admin',
      email: 'gurung@gmail.com',
    },
  ];

  getUserByName(username: string): User {
    return this.users.find((user: User) => user.username === username);
  }
}
