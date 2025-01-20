export const ERROR_MESSAGES = {
  CODES: {
    NOT_AUTHORIZED: 'NotAuthorizedException',
    USER_NOT_FOUND: 'UserNotFoundException',
    USERNAME_EXISTS: 'UsernameExistsException',
    PASSWORD_RESET_REQUIRED: 'PasswordResetRequiredException',
    CODE_MISMATCH: 'CodeMismatchException',
    INVALID_PARAMETER: 'InvalidParameterException',
    TOO_MANY_REQUESTS: 'TooManyRequestsException',
    LIMIT_EXCEEDED: 'LimitExceededException',
    EXPIRED_CODE: 'ExpiredCodeException',
    INTERNAL_ERROR: 'InternalErrorException',
    UNAUTHORIZED: 'UnauthorizedException',
  },

  MESSAGES: {
    NOT_AUTHORIZED: 'Incorrect email or password.',
    USER_NOT_FOUND: 'User not found. Please check your email or register.',
    USERNAME_EXISTS: 'An account with this username already exists.',
    PASSWORD_RESET_REQUIRED: 'Password reset required.',
    CODE_MISMATCH: 'The verification code you entered is incorrect.',
    INVALID_PARAMETER: 'The parameters you provided are invalid.',
    TOO_MANY_REQUESTS: 'Too many requests. Please try again later.',
    LIMIT_EXCEEDED: 'Limit exceeded. Please try again later.',
    EXPIRED_CODE:
      'The verification code has expired. Please request a new one.',
    INTERNAL_ERROR: 'An internal error occurred. Please try again later.',
    UNAUTHORIZED: 'Unauthorized. Please check your credentials.',
    DEFAULT_ERROR: 'An unexpected error occurred. Please try again.',
  },
};

export const UNEXPECTED_ERROR =
  "UNEXPECTED_ERROR: 'An unexpected error occurred. Please try again.";

export const SESSION_EXPIRED_ERROR =
  'Session expired. Please log in again to continue.';

export const REQUIRED_FIELD_MESSAGE = 'This field is required';
