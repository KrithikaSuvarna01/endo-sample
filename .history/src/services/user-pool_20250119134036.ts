import {
  CognitoUserPool,
  ICognitoUserPoolData,
} from 'amazon-cognito-identity-js';

/**
 * Returns a new instance of CognitoUserPool using the provided userPoolId and clientId.
 *
 * @param {string} userPoolId - The ID of the Cognito User Pool.
 * @param {string} clientId - The ID of the Cognito App Client.
 * @returns {CognitoUserPool} A new instance of CognitoUserPool.
 */
export const getUserPool = (userPoolId: string, clientId: string) => {
  const poolData: ICognitoUserPoolData = {
    UserPoolId: userPoolId,
    ClientId: clientId,
  };

  return new CognitoUserPool(poolData);
};
