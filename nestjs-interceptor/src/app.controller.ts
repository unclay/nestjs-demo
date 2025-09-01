import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RouteTitle } from './core/decorators/route-title.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @RouteTitle('首页')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @RouteTitle('测试页面')
  getTest(): string {
    return this.appService.getHello();
  }
}
