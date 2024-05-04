import { Inject, Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport, RmqContext } from '@nestjs/microservices';
import configuration from '@/config/configuration';

// export const DIRECT_1 = Symbol('DIRECT_1');

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ClientsModule.register([
      {
        name: 'DIRECT_1',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://user:passwd@127.0.0.1:5672'],
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
