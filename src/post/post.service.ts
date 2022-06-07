import { Injectable } from '@nestjs/common';
import { Post } from '../post/entities/post.entity';

interface FindPostOptions {
  authorId?: number;
}

@Injectable()
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Content 1',
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
      votes: 2,
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Content 3',
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
}
