import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { HandlerType } from 'src/queue/handlerType';
import { QueueProducer } from 'src/queue/queue.producer';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectQueue(HandlerType.Register) private registerQueue: Queue,
    private readonly queueProducer: QueueProducer
  ) {}
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
    this.queueProducer.createJob<HandlerType.Register>(HandlerType.Register, this.registerQueue, {
      email: 'navinmishra1717@gmail.com',
    });
    return this.authors;
  }

  findOne(id: number) {
    return this.authors.find((author) => author.id === id);
  }
}
