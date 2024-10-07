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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberPlan = void 0;
const typeorm_1 = require("typeorm");
const ulid_1 = require("ulid");
const enum_1 = require("../enum");
let MemberPlan = class MemberPlan extends typeorm_1.BaseEntity {
};
exports.MemberPlan = MemberPlan;
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { length: 26, default: () => `'${(0, ulid_1.ulid)()}'` }),
    __metadata("design:type", String)
], MemberPlan.prototype, "member_plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: false, default: enum_1.MemberPlanType.SUBSCRIPTION }),
    __metadata("design:type", String)
], MemberPlan.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, nullable: false }),
    __metadata("design:type", String)
], MemberPlan.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], MemberPlan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40, nullable: true }),
    __metadata("design:type", String)
], MemberPlan.prototype, "picture", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], MemberPlan.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], MemberPlan.prototype, "nb_month", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: enum_1.MemberPlanPaymentType.MENSUAL }),
    __metadata("design:type", String)
], MemberPlan.prototype, "payment", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], MemberPlan.prototype, "cumulative", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 7 }),
    __metadata("design:type", Number)
], MemberPlan.prototype, "nb_training", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15, default: enum_1.MemberPlanFreqTrainingType.PER_WEEK }),
    __metadata("design:type", String)
], MemberPlan.prototype, "freq_training", void 0);
exports.MemberPlan = MemberPlan = __decorate([
    (0, typeorm_1.Entity)()
], MemberPlan);
//# sourceMappingURL=member-plan.entity.js.map