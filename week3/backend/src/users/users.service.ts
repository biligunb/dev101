import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
      ){
      }
    private users: User[] = [
        {
            id: 0,
            name: 'Bob',
            email: 'bob@gmail.com',
            password: 'bobPass',
          },
      
          {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            password: 'johnPass',
          },
      
          {
            id: 2,
            name: 'Gary',
            email: 'gary@gmail.com',
            password: 'garyPass',
          },
    ];

    async create(data: any): Promise<User>{
        return this.userRepository.save(data);
      }
    

    findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user: User) => user.email ===email);
        if (user) {
            return Promise.resolve(user);
        }
        return undefined;
    }

    findOne(id:number): Promise<User | undefined> {
        const user = this.users.find((user: User) => user.id === id);
        if (user) {
            return Promise.resolve(user);
        }
        return undefined;
    }
}
