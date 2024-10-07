import { Member } from './member.entity';
import { MemberPlan } from './member-plan.entity';
export declare class MemberSubscription {
    member_subscription_id: string;
    start_date: Date;
    member: Member;
    member_plan: MemberPlan;
    active: boolean;
}
