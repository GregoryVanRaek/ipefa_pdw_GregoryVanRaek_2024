import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {configManager} from '@common/config';
import {APP_GUARD} from '@nestjs/core';
import { JwtGuard } from '../security/jwt';
import { SecurityModule } from '../security/security.module';
import { MemberModule } from '../module/member/member.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configManager.getTypeOrmConfig()),
    SecurityModule,
    MemberModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD, useClass: JwtGuard
  }],
})
export class AppModule {
}
