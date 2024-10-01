import { ApiCodeResponse, ApiException } from '@common/api';

export class MemberPlanCreateException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBERPLAN_CREATE_ERROR, 400);
  }
}

export class MemberPlanDeleteException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBERPLAN_DELETE_ERROR, 200);
  }
}

export class MemberPlanNotFoundException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBERPLAN_NOT_FOUND, 200);
  }
}

export class MemberPlanListException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBERPLAN_NOT_FOUND, 200);
  }
}

export class MemberPlanUpdateException extends ApiException {
  constructor() {
    super(ApiCodeResponse.MEMBERPLAN_UPDATE_ERROR, 400);
  }
}

