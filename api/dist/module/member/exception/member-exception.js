"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUpdateException = exports.MemberListException = exports.MemberNotFoundException = exports.MemberDeleteException = exports.MemberCreateException = void 0;
const api_1 = require("../../../common/api");
class MemberCreateException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBER_CREATE_ERROR, 400);
    }
}
exports.MemberCreateException = MemberCreateException;
class MemberDeleteException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBER_DELETE_ERROR, 200);
    }
}
exports.MemberDeleteException = MemberDeleteException;
class MemberNotFoundException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBER_NOT_FOUND, 200);
    }
}
exports.MemberNotFoundException = MemberNotFoundException;
class MemberListException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBER_NOT_FOUND, 200);
    }
}
exports.MemberListException = MemberListException;
class MemberUpdateException extends api_1.ApiException {
    constructor() {
        super(api_1.ApiCodeResponse.MEMBER_UPDATE_ERROR, 400);
    }
}
exports.MemberUpdateException = MemberUpdateException;
//# sourceMappingURL=member-exception.js.map