import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppControllerHelloWorld } from '@root/app.swagger';

@ApiTags('Route de base') // pour nommer la route dans swagger

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation(AppControllerHelloWorld) // personnaliser la description dans swagger
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
