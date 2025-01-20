import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "eu-north-1_RDg49bUWE",
  ClientId: "10c994j4b7l1usp82hed50ouui",
};

export default new CognitoUserPool(poolData);