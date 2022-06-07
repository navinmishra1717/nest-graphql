import { Injectable } from '@nestjs/common';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  private authors: Author[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      company: 'Google',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 31,
      company: 'Facebook',
    },
  ];
  findAll() {
    return this.authors;
  }

  findOne(id: number) {
    return this.authors.find((author) => author.id === id);
  }
}
