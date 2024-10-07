"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberModule = void 0;
const common_1 = require("@nestjs/common");
const model_1 = require("../../common/model");
const model_2 = require("./model");
const typeorm_1 = require("@nestjs/typeorm");
const member_service_1 = require("./service/member.service");
const member_plan_service_1 = require("./service/member-plan.service");
const member_controller_1 = require("./controller/member.controller");
const member_plan_controller_1 = require("./controller/member-plan.controller");
let MemberModule = class MemberModule {
};
exports.MemberModule = MemberModule;
exports.MemberModule = MemberModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([model_2.Member, model_2.MemberPlan, model_2.MemberSubscription, model_1.Address])],
        providers: [member_service_1.MemberService, member_plan_service_1.MemberPlanService],
        controllers: [member_controller_1.MemberController, member_plan_controller_1.MemberPlanController],
    })
], MemberModule);
//# sourceMappingURL=member.module.js.map