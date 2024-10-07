import { Member, MemberCreatePayload, MemberUpdatePayload } from '../model';
import { Repository } from 'typeorm';
export declare class MemberService {
    private readonly repository;
    constructor(repository: Repository<Member>);
    create(payload: MemberCreatePayload): Promise<Member>;
    delete(id: string): Promise<void>;
    detail(id: string): Promise<Member>;
    getAll(): Promise<Member[]>;
    update(payload: MemberUpdatePayload): Promise<Member>;
}
