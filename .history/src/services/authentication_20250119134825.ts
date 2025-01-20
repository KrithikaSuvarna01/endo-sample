import { CognitoError,handleError } from '../lib/error-handler';
import { AuthResult } from '../feature/login/types';
import {
  AuthenticationDetails,
  CognitoRefreshToken,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import Cookies from 'js-cookie';
import { getUserPool } from './user-pool';




/**
 * Authenticates a user with the provided email and password.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user.
 * @returns {Promise<AuthResult>} A promise that resolves with an AuthResult if authentication is successful.
 * @throws {CognitoError} Throws an error if authentication fails.
 */
export const authenticate = async (
  email: string,
  password: string,
  userPoolId: string,
  clientId: string
): Promise<AuthResult> => {
  try {
    const userPool = getUserPool(userPoolId, clientId);
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const result = await new Promise<AuthResult>((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: (result) => {
          // Store the access token in memory
          const accessToken = result.getAccessToken().getJwtToken();
          const refreshToken = result.getRefreshToken().getToken();

          Cookies.set('accessToken', accessToken, { expires: 1 });
          Cookies.set('refreshToken', refreshToken, { expires: 7 });

          resolve({});
        },
        onFailure: (err) => reject(handleError('Login failed', err)),
        newPasswordRequired: (userAttributes) => {
          resolve({
            newPasswordRequired: true,
            userAttributes,
            cognitoUser: user,
          });
        },
      });
    });

    return result;
  } catch (error) {
    throw handleError('Authentication failed', error as CognitoError);
  }
};

/**
 * Verifies the MFA code for the given user.
 * @param {CognitoUser} user - The CognitoUser object to verify MFA for.
 * @param {string} code - The MFA code provided by the user.
 * @returns {Promise<string>} A promise that resolves with a message indicating MFA setup completion.
 * @throws {CognitoError} Throws an error if MFA verification fails.
 */
export const verifyMFA = async (user: CognitoUser, code: string) => {
  try {
    return await new Promise((resolve, reject) => {
      user.sendMFACode(code, {
        onSuccess: () => resolve('MFA setup complete'),
        onFailure: (err) => reject(handleError('MFA verification failed', err)),
      });
    });
  } catch (error) {
    throw handleError('MFA verification failed', error as CognitoError);
  }
};

/**
 * Logs out the current user and clears authentication tokens from cookies.
 */
export const authLogout = (clientId: string, userPoolId: string) => {
  const userPool = getUserPool(userPoolId, clientId);

  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  // Sign out the user from Cognito
  const user = userPool.getCurrentUser();
  if (user) {
    user.signOut();
  }
};

/**
 * Refreshes the authentication tokens using the provided refresh token.
 * @param {string} refreshToken - The refresh token used to obtain new tokens.
 * @returns {Promise<any>} A promise that resolves with the result of the token refresh operation.
 * @throws {CognitoError} Throws an error if token refresh fails.
 */
export const refreshTokens = async (
  refreshToken: string,
  clientId: string | undefined,
  userPoolId: string | undefined
) => {
  try {
    const cognitoRefreshToken = new CognitoRefreshToken({
      RefreshToken: refreshToken,
    });
    if (!clientId || !userPoolId) {
      throw new Error('clientId and userPoolId are required');
    }

    const userPool = getUserPool(userPoolId, clientId);

    const user = new CognitoUser({ Username: '', Pool: userPool });

    const result = await new Promise((resolve, reject) => {
      user.refreshSession(cognitoRefreshToken, (err, result) => {
        if (err) {
          reject(handleError('Token refresh failed', err));
        } else {
          const newAccessToken = result.getAccessToken().getJwtToken();
          const newRefreshToken = result.getRefreshToken().getToken();

          Cookies.set('accessToken', newAccessToken, { expires: 1 });
          Cookies.set('refreshToken', newRefreshToken, { expires: 7 });

          resolve(result);
        }
      });
    });

    return result;
  } catch (error) {
    throw handleError('Token refresh failed', error as CognitoError);
  }
};
