import { CognitoUser } from 'amazon-cognito-identity-js';
import { SET_EMAIL, SET_IS_LOADING,
  TOGGLE_NEW_PASSWORD_FORM,
  SET_AUTHENTICATED_USER,
  SET_USER_ATTRIBUTES,
  SET_LOGIN_ERROR,
  SET_IS_PASSWORD_VISIBLE,
  SET_PASSWORD } from '../../constants/action-type';


/**
 * Represents the attributes of a user returned from Cognito.
 */
export interface UserAttributes {
  /** The email address of the user. */
  email?: string;
}

/**
 * Represents the result of an authentication process.
 */
export interface AuthenticationResponse {
  /**
   * Indicates if a new password is required for the user.
   */
  isNewPasswordRequired?: boolean;
  /**
   * The CognitoUser object returned on successful authentication.
   */
  authenticatedUser?: CognitoUser;
  /**
   * The user attributes returned from Cognito.
   */
  userAttributes?: UserAttributes;
}

/**
 * Represents the state of the login process.
 */
export interface LoginFormState {
  /** The value entered in the email field. */
  email: string;

  /** The value entered in the password field. */
  password: string;

  /** Error message if login fails. */
  loginError: string | null;

  /**
   * Indicates whether the reset password form should be shown.
   */
  isResetPasswordFormVisible: boolean;

  /**
   * The authenticated CognitoUser object.
   */
  authenticatedUser: CognitoUser | null;

  /**
   * The user attributes returned from Cognito upon authentication.
   */
  userAttributes: UserAttributes | null;

  /**
   * The loading state during the form submission process.
   */
  isLoading: boolean;

  /**
   * The state to control password visiblity.
   */
  isPasswordVisible: boolean;
}

/**
 * Defines the actions that can be dispatched to the login reducer.
 */
export type LoginFormAction =
  | { type: typeof SET_EMAIL; payload: string }
  | { type: typeof SET_PASSWORD; payload: string }
  | { type: typeof SET_LOGIN_ERROR; payload: string | null }
  | { type: typeof TOGGLE_NEW_PASSWORD_FORM; payload: boolean }
  | { type: typeof SET_AUTHENTICATED_USER; payload: CognitoUser | null }
  | { type: typeof SET_USER_ATTRIBUTES; payload: UserAttributes | null }
  | { type: typeof SET_IS_LOADING; payload: boolean }
  | { type: typeof SET_IS_PASSWORD_VISIBLE; payload: boolean };

/**
 * Represents the result of an authentication attempt.
 */
export interface AuthResult {
  /**
   * Indicates whether a new password is required.
   */
  newPasswordRequired?: boolean;
  /**
   * The CognitoUser object if authentication was successful.
   */
  cognitoUser?: CognitoUser;
  /**
   * The user attributes returned from Cognito.
   */
  userAttributes?: UserAttributes;
}

export interface LoginProps {
  /**
   * Client ID for authentication.
   */
  clientId: string;

  /**
   * User Pool ID for authentication.
   */
  userPoolId: string;

  /**
   * Organisation name.
   */
  organisationName: string;
}
