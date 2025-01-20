import { ERROR_MESSAGES } from '@/constants/error-messages';

/**
 * Type representing an error object from Cognito.
 */
export interface CognitoError extends Error {
  /** A message describing the error. */
  message: string;
  /** Optional error code. */
  code?: string;
}

/**
 * Creates a new error with a custom message and optional Cognito error details.
 *
 * This function takes a custom message and an optional CognitoError object,
 * and returns a new Error object with a formatted message. If the Cognito error
 * contains a specific error code, it retrieves a user-friendly message associated
 * with that code. If no message is found, it falls back to the error message from
 * the Cognito error or a default error message.
 *
 * @param {string} message - The custom message to include in the error.
 * @param {CognitoError} [error] - Optional CognitoError object to include additional details.
 * @returns {Error} A new Error object with the formatted message.
 */
export const handleError = (message: string, error?: CognitoError): Error => {
  let errMsg = message;

  if (error) {
    const messageFromCode =
      ERROR_MESSAGES.MESSAGES[
        error.code as keyof typeof ERROR_MESSAGES.MESSAGES
      ];

    errMsg =
      messageFromCode || error.message || ERROR_MESSAGES.MESSAGES.DEFAULT_ERROR;
  }

  return new Error(errMsg);
};
