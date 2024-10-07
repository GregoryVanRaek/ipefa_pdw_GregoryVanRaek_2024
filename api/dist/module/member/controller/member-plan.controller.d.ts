import { MemberPlanService } from '../service/member-plan.service';
import { MemberPlan, MemberPlanCreatePayload, MemberPlanUpdatePayload } from '../model';
export declare class MemberPlanController {
    private readonly service;
    constructor(service: MemberPlanService);
    create(payload: MemberPlanCreatePayload): Promise<MemberPlan>;
    delete(id: string): Promise<void>;
    detail(id: string): Promise<MemberPlan>;
    getAll(): Promise<MemberPlan[]>;
    update(payload: MemberPlanUpdatePayload): Promise<MemberPlan>;
}
