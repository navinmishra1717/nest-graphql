import { Injectable } from '@nestjs/common';
import { Post } from '../post/entities/post.entity';
import { Author } from '../author/entities/author.entity';
import { AuthorService } from 'src/author/author.service';

interface FindPostOptions {
  authorId?: number;
}

@Injectable()
export class PostService {
  constructor(private authorService: AuthorService) {}
  private posts: Post[] = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Content 1',
      authorId: 1,
      author: {
        id: 1,
        name: 'John Doe',
      },
      votes: 1,
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content 2',
      author: {
        id: 1,
        name: 'John Doe',
      },
      authorId: 1,
      votes: 2,
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Content 3',
      authorId: 2,
      author: {
        id: 1,
        name: 'John Doe',
      },
      votes: 3,
    },
  ];

  findAll(options: FindPostOptions): Post[] {
    return this.posts.filter((post) => post.author.id === options.authorId);
  }

  findOne(id: number): Post {
    return this.posts.find((post) => post.id === id);
  }

  upvote(id: number): Post {
    const post = this.findOne(id);
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    post.votes += 1;
    return post;
  }

  getAuthor(authorId: number): Author {
    return this.authorService.findOne(authorId);
  }
}
