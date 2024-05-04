import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('DIRECT_1') private client: ClientRMQ) {}

  sendMsg(): string {
    // send msg to queue direct1
    this.client.emit('emit1', {
      _id: Math.random() * 10000,
    });

    return 'Hello World!';
  }
}
