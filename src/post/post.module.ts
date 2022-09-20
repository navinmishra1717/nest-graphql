import { Module } from '@nestjs/common';
import { AuthorModule } from 'src/author/author.module';
import { QueueProducer } from 'src/queue/queue.producer';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [AuthorModule],
  providers: [PostResolver, PostService, QueueProducer],
})
export class PostModule {}
