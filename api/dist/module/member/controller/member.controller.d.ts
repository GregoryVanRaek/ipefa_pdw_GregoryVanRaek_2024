import { MemberService } from '../service/member.service';
import { Member, MemberCreatePayload, MemberUpdatePayload } from '../model';
export declare class MemberController {
    private readonly service;
    constructor(service: MemberService);
    create(payload: MemberCreatePayload): Promise<Member>;
    delete(id: string): Promise<void>;
    detail(id: string): Promise<Member>;
    getAll(): Promise<Member[]>;
    update(payload: MemberUpdatePayload): Promise<Member>;
}
