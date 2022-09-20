import { Queue, Worker } from 'bullmq';
import { Handler, HandlerType } from './handlerType';

const connection = {
  host: 'localhost',
  port: 6379,
};

export class QueueFactory<T extends HandlerType> {
  declare queue: Queue;
  declare name: T;
  declare handler: Handler<T>;

  constructor(name: T, handler: Handler<T>) {
    this.name = name;
    this.handler = handler;
    this.init();
  }

  init() {
    this.queue = new Queue(this.name, { connection });
    this.initHandlers();
  }
  initHandlers() {
    const worker = new Worker(this.name, this.handler, { connection });
    worker.on('completed', (job) => {
      console.log(`${JSON.stringify(job)} has completed!`);
    });

    worker.on('failed', (job) => {
      console.log(`${JSON.stringify(job)} has completed!`);
    });
  }
}
