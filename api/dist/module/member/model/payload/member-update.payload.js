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
exports.MemberUpdatePayload = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const api_1 = require("../../../../common/api");
const enum_1 = require("../enum");
const model_1 = require("../../../../common/model");
class MemberUpdatePayload {
}
exports.MemberUpdatePayload = MemberUpdatePayload;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_MEMBER_ID_MANDATORY }),
    (0, class_validator_1.Length)(26, 26, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_MEMBER_ID_LENGTH_ERROR }),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "member_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_FIRSTNAME_IS_NOT_STRING }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_FIRSTNAME_LENGTH_ERROR }),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_LASTNAME_IS_NOT_STRING }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_LASTNAME_LENGTH_ERROR }),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)({ message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_BIRTHDATE_IS_NOT_VALID }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], MemberUpdatePayload.prototype, "birthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(enum_1.Gender, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_GENDER_IS_NOT_VALID }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(undefined, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_MAIL_IS_NOT_VALID }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_MAIL_LENGTH_ERROR }),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_PHONE_LENGTH_ERROR }),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 34, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_IBAN_LENGTH_ERROR }),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "iban", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 10, { message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_ACTIVATION_CODE_LENGTH_ERROR }),
    __metadata("design:type", String)
], MemberUpdatePayload.prototype, "code_activation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_SUBSCRIPTION_NOT_VALID }),
    __metadata("design:type", Array)
], MemberUpdatePayload.prototype, "subscriptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", model_1.Address)
], MemberUpdatePayload.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: api_1.ApiCodeResponse.MEMBER_PAYLOAD_ACTIVE_INVALID }),
    __metadata("design:type", Boolean)
], MemberUpdatePayload.prototype, "active", void 0);
//# sourceMappingURL=member-update.payload.js.map