import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppControllerHelloWorld } from '@root/app.swagger';

@ApiTags('Route de base')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation(AppControllerHelloWorld)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
