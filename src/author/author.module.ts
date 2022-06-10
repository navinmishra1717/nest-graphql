import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { PostService } from 'src/post/post.service';

@Module({
  providers: [AuthorResolver, AuthorService, PostService],
  exports: [AuthorService],
})
export class AuthorModule {}
