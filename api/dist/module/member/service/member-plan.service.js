"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberPlanService = void 0;
const common_1 = require("@nestjs/common");
const model_1 = require("../model");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const builder_pattern_1 = require("builder-pattern");
const lodash_1 = require("lodash");
const exception_1 = require("../exception");
const ulid_1 = require("ulid");
let MemberPlanService = class MemberPlanService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        try {
            return await this.repository.save((0, builder_pattern_1.Builder)()
                .type(payload.type)
                .title(payload.title)
                .description(payload.description)
                .picture(payload.picture)
                .price(payload.price)
                .nb_month(payload.nb_month)
                .payment(payload.payment)
                .cumulative(payload.cumulative)
                .nb_training(payload.nb_training)
                .freq_training(payload.freq_training)
                .member_plan_id(`${(0, ulid_1.ulid)()}`)
                .build());
        }
        catch (e) {
            throw new exception_1.MemberPlanCreateException();
        }
    }
    async delete(id) {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        }
        catch (e) {
            throw new exception_1.MemberPlanDeleteException();
        }
    }
    async detail(id) {
        const result = await this.repository.findOneBy({ member_plan_id: id });
        if (!(0, lodash_1.isNil)(result)) {
            return result;
        }
        throw new exception_1.MemberPlanNotFoundException();
    }
    getAll() {
        try {
            return this.repository.find();
        }
        catch (e) {
            throw new exception_1.MemberPlanListException();
        }
    }
    async update(payload) {
        try {
            let detail = await this.detail(payload.member_plan_id);
            detail.type = payload.type;
            detail.title = payload.title;
            detail.description = payload.description;
            detail.picture = payload.picture;
            detail.price = payload.price;
            detail.nb_month = payload.nb_month;
            detail.payment = payload.payment;
            detail.cumulative = payload.cumulative;
            detail.freq_training = payload.freq_training;
            detail.nb_training = payload.nb_training;
            return await this.repository.save(detail);
        }
        catch (e) {
            throw new exception_1.MemberPlanUpdateException();
        }
    }
};
exports.MemberPlanService = MemberPlanService;
exports.MemberPlanService = MemberPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(model_1.MemberPlan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MemberPlanService);
//# sourceMappingURL=member-plan.service.js.map