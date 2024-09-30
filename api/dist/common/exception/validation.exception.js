"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToSnake = exports.validationErrorToApiCodeResponse = exports.ValidationException = void 0;
const api_1 = require("../api");
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
class ValidationException extends common_1.HttpException {
    constructor(errors) {
        super({
            code: api_1.ApiCodeResponse.PAYLOAD_IS_NOT_VALID,
            data: errors.map((e) => (0, exports.validationErrorToApiCodeResponse)(e)).flat(),
            result: false
        }, 499);
    }
}
exports.ValidationException = ValidationException;
const validationErrorToApiCodeResponse = (error) => {
    return Object.keys(error.constraints).map((k) => {
        const code = api_1.ApiCodeResponse[`${(0, exports.camelToSnake)(error.property)}_${(0, exports.camelToSnake)(k)}`];
        return (0, lodash_1.isNil)(code) ? api_1.ApiCodeResponse.PAYLOAD_PARAM_IS_MISSING : code;
    });
};
exports.validationErrorToApiCodeResponse = validationErrorToApiCodeResponse;
const camelToSnake = (str) => {
    return str.replace(/([A-Z])/g, " $1").split(' ').join('_').toUpperCase();
};
exports.camelToSnake = camelToSnake;
//# sourceMappingURL=validation.exception.js.map