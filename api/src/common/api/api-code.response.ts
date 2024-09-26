// Message à traduire dans le front
export enum ApiCodeResponse {
  TEST = 'api.result.test',
  COMMON_SUCCESS='api.success',
  NO_TOKEN_FOUNDED = 'api.security.error.no_token_found',
  USER_NOT_FOUND = 'api.security.error.user_not_found',
  TOKEN_EXPIRED = 'api.security.error.token_expired',
  SIGNUP_ERROR = 'api.security.error.sign-up',
  CREDENTIAL_DELETE_ERROR = 'api.security.error.credential-delete',
  USER_ALREADY_EXIST = 'api.security.error.user-already-exist',
  TOKEN_GEN_ERROR = 'api.security.error.token-gen',
  PAYLOAD_IS_NOT_VALID='api.validation.error',
  PAYLOAD_PARAM_IS_MISSING='api.validation.param.missing',
  USERNAME_IS_NOT_EMPTY='api.error.username.is-not-empty',
  USERNAME_MIN_LENGTH ='api.error.username.min-length',
  USERNAME_MAX_LENGTH ='api.error.username.max-length',
  PASSWORD_MIN_LENGTH='api.error.password.min-length',
  PASSWORD_MAX_LENGTH='api.error.password.max-length',
  PASSWORD_IS_NOT_EMPTY='api.error.password.is-not-empty',
  ACCOUNT_SIGNIN_SUCCESS='api.account.success',
  ACCOUNT_SIGNUP_SUCCESS='api.signup.success'
}