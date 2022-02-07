import {Controller, Get, Inject} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientProxy} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  @Inject('CATS_SERVICE') private readonly client: ClientProxy
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('Hello', 'Hello from RabbitMQ!')
    return this.appService.getHello();
  }
}
