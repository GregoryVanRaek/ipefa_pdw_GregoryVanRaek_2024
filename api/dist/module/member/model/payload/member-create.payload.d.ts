import { Gender } from '../enum';
import { MemberSubscription } from '../entity';
import { Address } from '@common/model';
export declare class MemberCreatePayload {
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
