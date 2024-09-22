import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configManager } from '@common/config';
import { SecurityModule } from '../security/security.module';

@Module({
  imports: [SecurityModule, TypeOrmModule.forRoot(configManager.getTypeOrmConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
