import { ApiCodeResponse, ApiException } from '@common/api';

export class MemberCreateException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBER_CREATE_ERROR, 400);
  }
}

export class MemberDeleteException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBER_DELETE_ERROR, 200);
  }
}

export class MemberNotFoundException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBER_NOT_FOUND, 200);
  }
}

export class MemberListException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBER_NOT_FOUND, 200);
  }
}

export class MemberUpdateException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBER_UPDATE_ERROR, 400);
  }
}

