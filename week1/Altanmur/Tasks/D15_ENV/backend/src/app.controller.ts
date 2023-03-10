import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/nest')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getNestJS(): string {
    return this.appService.getHello();
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
