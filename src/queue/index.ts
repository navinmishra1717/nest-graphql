import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueProducer } from './queue.producer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  providers: [QueueProducer],
})
export class QueueProvider {}
