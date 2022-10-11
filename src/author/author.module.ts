import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { PostService } from 'src/post/post.service';
import { QueueProducer } from 'src/queue/queue.producer';
import { BullModule } from '@nestjs/bull';
import { HandlerType } from 'src/queue/handlerType';

@Module({
  imports: [
    BullModule.registerQueue({
      name: HandlerType.Register,
    }),
  ],
  providers: [AuthorResolver, AuthorService, PostService, QueueProducer],
  exports: [AuthorService],
})
export class AuthorModule {}
