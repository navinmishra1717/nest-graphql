import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      company: 'ABC',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 31,
      company: 'XYZ',
    },
    {
      id: 3,
      name: 'Navin Mishra',
      age: 25,
      company: 'Ebpearls',
    },
  ];
  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = {
      ...user,
      ...updateUserDto,
    };
    this.users = this.users.map((user) => (user.id === id ? updatedUser : user));
    return updatedUser;
  }
}
