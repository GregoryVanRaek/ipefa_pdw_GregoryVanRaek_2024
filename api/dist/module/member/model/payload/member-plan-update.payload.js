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
exports.MemberPlanUpdatePayload = void 0;
const enum_1 = require("../enum");
const class_validator_1 = require("class-validator");
class MemberPlanUpdatePayload {
}
exports.MemberPlanUpdatePayload = MemberPlanUpdatePayload;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(26, 26),
    __metadata("design:type", String)
], MemberPlanUpdatePayload.prototype, "member_plan_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.MemberPlanType),
    __metadata("design:type", String)
], MemberPlanUpdatePayload.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 80),
    __metadata("design:type", String)
], MemberPlanUpdatePayload.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberPlanUpdatePayload.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 40),
    __metadata("design:type", String)
], MemberPlanUpdatePayload.prototype, "picture", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MemberPlanUpdatePayload.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MemberPlanUpdatePayload.prototype, "nb_month", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.MemberPlanPaymentType),
    __metadata("design:type", String)
], MemberPlanUpdatePayload.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], MemberPlanUpdatePayload.prototype, "cumulative", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MemberPlanUpdatePayload.prototype, "nb_training", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.MemberPlanFreqTrainingType),
    __metadata("design:type", String)
], MemberPlanUpdatePayload.prototype, "freq_training", void 0);
//# sourceMappingURL=member-plan-update.payload.js.map