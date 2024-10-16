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
exports.MemberSubscription = void 0;
const typeorm_1 = require("typeorm");
const member_entity_1 = require("./member.entity");
const member_plan_entity_1 = require("./member-plan.entity");
let MemberSubscription = class MemberSubscription {
};
exports.MemberSubscription = MemberSubscription;
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { length: 26 }),
    __metadata("design:type", String)
], MemberSubscription.prototype, "member_subscription_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MemberSubscription.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => member_entity_1.Member, { eager: false }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'member_id', name: 'member_id_fk' }),
    __metadata("design:type", member_entity_1.Member)
], MemberSubscription.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => member_plan_entity_1.MemberPlan, { eager: true }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'member_plan_id', name: 'member_plan_id_fk' }),
    __metadata("design:type", member_plan_entity_1.MemberPlan)
], MemberSubscription.prototype, "member_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], MemberSubscription.prototype, "active", void 0);
exports.MemberSubscription = MemberSubscription = __decorate([
    (0, typeorm_1.Entity)()
], MemberSubscription);
//# sourceMappingURL=member-subscription.entity.js.map