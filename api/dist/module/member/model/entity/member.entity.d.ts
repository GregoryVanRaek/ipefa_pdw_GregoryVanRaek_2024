import { BaseEntity } from 'typeorm';
import { Gender } from '../enum';
import { MemberSubscription } from './member-subscription.entity';
import { Address } from '@common/model';
export declare class Member extends BaseEntity {
    member_id: string;
    firstname: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    mail: string;
    phone: string;
    iban: string;
    code_activation: string;
    subscriptions: MemberSubscription[];
    address: Address;
    active: boolean;
}
