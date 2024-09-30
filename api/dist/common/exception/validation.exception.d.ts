import { ApiCodeResponse } from '@common/api';
import { HttpException, ValidationError } from '@nestjs/common';
export declare class ValidationException extends HttpException {
    constructor(errors: ValidationError[]);
}
export declare const validationErrorToApiCodeResponse: (error: ValidationError) => ApiCodeResponse[];
export declare const camelToSnake: (str: string) => string;
