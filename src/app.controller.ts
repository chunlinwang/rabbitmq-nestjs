import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sendMsg(): string {
    return this.appService.sendMsg();
  }

  @MessagePattern('emit1')
  getNotifications(@Payload() data: string, @Ctx() context: RmqContext) {
    console.log(`Data emit1: ${JSON.stringify(data)}`);
    console.log(context.getMessage().toString());
    console.log(JSON.stringify(context.getPattern()));

    const channel = context.getChannelRef();

    channel.ack(context.getMessage());
  }
}
