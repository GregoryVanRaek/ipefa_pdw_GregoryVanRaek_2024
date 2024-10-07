import { Module } from '@nestjs/common';
import { Address } from '@common/model';
import { Member, MemberPlan, MemberSubscription } from './model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberService } from './service/member.service';
import { MemberPlanService } from './service/member-plan.service';
import { MemberController } from './controller/member.controller';
import { MemberPlanController } from './controller/member-plan.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Member, MemberPlan, MemberSubscription, Address])],
  providers: [MemberService, MemberPlanService],
  controllers: [MemberController, MemberPlanController],
})
export class MemberModule {}
