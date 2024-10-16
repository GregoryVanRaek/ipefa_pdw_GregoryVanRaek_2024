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
exports.MemberCreatePayload = void 0;
const class_validator_1 = require("class-validator");
const enum_1 = require("../enum");
const model_1 = require("../../../../common/model");
const swagger_1 = require("@nestjs/swagger");
class MemberCreatePayload {
}
exports.MemberCreatePayload = MemberCreatePayload;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MemberCreatePayload.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MemberCreatePayload.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], MemberCreatePayload.prototype, "birthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(enum_1.Gender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberCreatePayload.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MemberCreatePayload.prototype, "mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MemberCreatePayload.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 34),
    __metadata("design:type", String)
], MemberCreatePayload.prototype, "iban", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 10),
    __metadata("design:type", String)
], MemberCreatePayload.prototype, "code_activation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], MemberCreatePayload.prototype, "subscriptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", model_1.Address)
], MemberCreatePayload.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MemberCreatePayload.prototype, "active", void 0);
//# sourceMappingURL=member-create.payload.js.map