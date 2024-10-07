import { CrudService, MemberPlan, MemberPlanCreatePayload, MemberPlanUpdatePayload } from '../model';
import { Repository } from 'typeorm';
export declare class MemberPlanService implements CrudService<MemberPlan, MemberPlanCreatePayload, MemberPlanUpdatePayload, string> {
    private readonly repository;
    constructor(repository: Repository<MemberPlan>);
    create(payload: MemberPlanCreatePayload): Promise<MemberPlan>;
    delete(id: string): Promise<void>;
    detail(id: string): Promise<MemberPlan>;
    getAll(): Promise<MemberPlan[]>;
    update(payload: MemberPlanUpdatePayload): Promise<MemberPlan>;
}
