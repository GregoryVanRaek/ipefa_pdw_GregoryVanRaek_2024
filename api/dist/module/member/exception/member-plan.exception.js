"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberPlanUpdateException = exports.MemberPlanListException = exports.MemberPlanNotFoundException = exports.MemberPlanDeleteException = exports.MemberPlanCreateException = void 0;
const api_1 = require("../../../common/api");
class MemberPlanCreateException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBERPLAN_CREATE_ERROR, 400);
    }
}
exports.MemberPlanCreateException = MemberPlanCreateException;
class MemberPlanDeleteException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBERPLAN_DELETE_ERROR, 200);
    }
}
exports.MemberPlanDeleteException = MemberPlanDeleteException;
class MemberPlanNotFoundException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBERPLAN_NOT_FOUND, 200);
    }
}
exports.MemberPlanNotFoundException = MemberPlanNotFoundException;
class MemberPlanListException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBERPLAN_NOT_FOUND, 200);
    }
}
exports.MemberPlanListException = MemberPlanListException;
class MemberPlanUpdateException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBERPLAN_UPDATE_ERROR, 400);
    }
}
exports.MemberPlanUpdateException = MemberPlanUpdateException;
//# sourceMappingURL=member-plan.exception.js.map