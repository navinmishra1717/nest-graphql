import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { HandlerJobData, HandlerType } from './handlerType';

@Injectable()
export class QueueProducer {
  // protected queues: Partial<Record<HandlerType, Queue>> = {};

  createJob<T extends HandlerType>(name: T, queue: Queue, data: HandlerJobData[T]) {
    console.log(11111111);
    return queue.add(name, data);
  }
}
