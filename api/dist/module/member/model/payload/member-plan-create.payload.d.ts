import { MemberPlanFreqTrainingType, MemberPlanPaymentType, MemberPlanType } from '../enum';
export declare class MemberPlanCreatePayload {
    type: MemberPlanType;
    title: string;
    description: string;
    picture: string;
    price: number;
    nb_month: number;
    payment: MemberPlanPaymentType;
    cumulative: boolean;
    nb_training: number;
    freq_training: MemberPlanFreqTrainingType;
}
