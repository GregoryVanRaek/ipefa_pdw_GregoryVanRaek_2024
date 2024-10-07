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
exports.Member = void 0;
const typeorm_1 = require("typeorm");
const ulid_1 = require("ulid");
const enum_1 = require("../enum");
const member_subscription_entity_1 = require("./member-subscription.entity");
const model_1 = require("../../../../common/model");
let Member = class Member extends typeorm_1.BaseEntity {
};
exports.Member = Member;
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { length: 26, default: () => `'${(0, ulid_1.ulid)()}'` }),
    __metadata("design:type", String)
], Member.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Member.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true, default: enum_1.Gender.OTHER }),
    __metadata("design:type", String)
], Member.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "mail", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15, nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 34, nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "iban", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "code_activation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => member_subscription_entity_1.MemberSubscription, (ms) => ms.member, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], Member.prototype, "subscriptions", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => model_1.Address, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'address_id', name: 'address_id_fk' }),
    __metadata("design:type", model_1.Address)
], Member.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Member.prototype, "active", void 0);
exports.Member = Member = __decorate([
    (0, typeorm_1.Entity)()
], Member);
//# sourceMappingURL=member.entity.js.map