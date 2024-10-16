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
exports.MemberService = void 0;
const model_1 = require("../model");
const builder_pattern_1 = require("builder-pattern");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const lodash_1 = require("lodash");
const exception_1 = require("../exception");
const ulid_1 = require("ulid");
let MemberService = class MemberService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        try {
            return await this.repository.save((0, builder_pattern_1.Builder)()
                .firstname(payload.firstname)
                .lastname(payload.lastname)
                .mail(payload.mail)
                .iban(payload.iban)
                .phone(payload.phone)
                .gender(payload.gender)
                .birthdate(payload.birthdate)
                .address(payload.address)
                .active(payload.active)
                .member_id(`${(0, ulid_1.ulid)()}`)
                .build());
        }
        catch (e) {
            throw new exception_1.MemberCreateException();
        }
    }
    async delete(id) {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        }
        catch (e) {
            throw new exception_1.MemberDeleteException();
        }
    }
    async detail(id) {
        const result = await this.repository.findOneBy({ member_id: id });
        if (!((0, lodash_1.isNil)(result))) {
            return result;
        }
        throw new exception_1.MemberNotFoundException();
    }
    async getAll() {
        try {
            return await this.repository.find();
        }
        catch (e) {
            throw new exception_1.MemberListException();
        }
    }
    async update(payload) {
        try {
            let detail = await this.detail(payload.member_id);
            detail.firstname = payload.firstname;
            detail.lastname = payload.lastname;
            detail.birthdate = payload.birthdate;
            detail.gender = payload.gender;
            detail.mail = payload.mail;
            detail.phone = payload.phone;
            detail.iban = payload.iban;
            detail.address = payload.address;
            detail.active = payload.active;
            detail.subscriptions = payload.subscriptions;
            return await this.repository.save(detail);
        }
        catch (e) {
            throw new exception_1.MemberUpdateException();
        }
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(model_1.Member)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MemberService);
//# sourceMappingURL=member.service.js.map