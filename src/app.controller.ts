import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const a = { test: '' };

    if (a.test === 'test') {
      console.log('test');
    }
    return this.appService.getHello();
  }
}