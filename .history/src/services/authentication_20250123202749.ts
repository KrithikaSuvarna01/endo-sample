import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js"
import { getUserPool } from "../lib/cognitoConfig";
import Cookies from 'js-cookie';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
  region: 'ap-south-1', // Mumbai region
});
const cognitoISP = new AWS.CognitoIdentityServiceProvider();




export const authenticate = async (email: string, password: string) => {
    try {
        const userPool = getUserPool(import.meta.env.VITE_USER_POOL_ID, import.meta.env.VITE_CLIENT_ID);
    const user = new CognitoUser({ Username: email, Pool: userPool });
     const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
     });
    const result = await new Promise((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: (result) => {
        console.log("User authenticated successfully", result);
          const accessToken = result.getAccessToken().getJwtToken();
          const refreshToken = result.getRefreshToken().getToken();
           Cookies.set('accessToken', accessToken, { expires: 1 });
          Cookies.set('refreshToken', refreshToken, { expires: 7 });
          resolve({ status: "success" });
        },
          onFailure: (err) => reject(
            console.log(err),
        ),
        newPasswordRequired: (userAttributes) => {
          resolve({
            status:"newPasswordRequired",
            newPasswordRequired: true,
            userAttributes,
            cognitoUser: user,
          });
        },
      });
    });

    return result;
        
    }catch (error) {
        console.log(error);
  }
  
  
    
}

export const initiateForgotPassword = async(email: string) => {

   const userExists = await checkIfUserExists(email);

  if (!userExists) {
    throw new Error('User not found');
  }
  return new Promise((resolve, reject) => {
    // Get the Cognito User Pool
    const userPool = getUserPool(
      import.meta.env.VITE_USER_POOL_ID,
      import.meta.env.VITE_CLIENT_ID
    );

    // Create a CognitoUser instance
    const userData = { Username: email, Pool: userPool };
    const cognitoUser = new CognitoUser(userData);

    

    // Initiate the forgot password flow
    cognitoUser.forgotPassword({
      onSuccess: (data) => {
        console.log("Code sent for password reset:", data);
        resolve(data);
      },
      onFailure: (err) => {
        console.error("Forgot Password Error:", err);
        reject(err);
      },
    });
  });
};


export const confirmForgotPassword = (email: string, otp: string) => {
  const userPool = getUserPool(import.meta.env.VITE_USER_POOL_ID, import.meta.env.VITE_CLIENT_ID);
  const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });

  return new Promise((resolve, reject) => {
    cognitoUser.confirmPassword(otp, "Hello@Krithika1234", {
     onSuccess: (data) => {
        console.log("Password confirmation successful:", data);
        resolve({});
      },
      onFailure: reject,
    });
  });
};



export const newPasswordReset = async (email:string,newPassword:string) => {
  try {
    const userPool = getUserPool(import.meta.env.VITE_USER_POOL_ID, import.meta.env.VITE_CLIENT_ID);
  const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });
    await new Promise((resolve, reject) => {
      cognitoUser.completeNewPasswordChallenge(newPassword, {}, {
        onSuccess: (data) => {
          console.log("Password reset successful:", data);
          resolve(data);
        },
        onFailure: reject,
      });
    });
    // Redirect or notify the user of success
  } catch (error) {
    console.error("Password reset failed:", error);
  }
};




export const checkIfUserExists = async (email:string) => {
  const params = {
    UserPoolId: import.meta.env.VITE_USER_POOL_ID, // Replace with your User Pool ID
    Username: email,
  };

  try {
    await cognitoISP.adminGetUser(params).promise();
    return true; // User exists
  } catch (error) {
    if (error.code === 'UserNotFoundException') {
      return false; // User doesn't exist
    }
    throw error; // Other errors
  }
};
