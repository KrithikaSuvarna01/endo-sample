import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js"
import { getUserPool } from "../lib/cognitoConfig";
import Cookies from 'js-cookie';
import { Cog } from "lucide-react";


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

export const initiateForgotPassword = (email: string) => {
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
     onSuccess: (result) => {
        // Once OTP is verified, authenticate with the temporary password
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: "Hello@Krithika1234", // The temporary password set
        });

        cognitoUser.authenticateUser(authDetails, {
          onSuccess: (authResult) => {
            // User authenticated successfully, now pass user attributes
            const userAttributes = authResult.getIdToken().payload;  // User attributes
            resolve({ status: "success", userAttributes });
          },
          onFailure: (err) => {
            reject(err);
          },
          newPasswordRequired: (userAttributes) => {
            // Handle case for new password required
            resolve({
              status: "newPasswordRequired",
              userAttributes,
              cognitoUser,
            });
          },
        });
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};



export const resetPassword = (email: string,newPassword:string) => {
  const userPool = getUserPool(import.meta.env.VITE_USER_POOL_ID, import.meta.env.VITE_CLIENT_ID);
  const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });

  return new Promise((resolve, reject) => {
    cognitoUser.completeNewPasswordChallenge(newPassword, {}, {
      onSuccess: (result) => {
        console.log(result)
        resolve("Password reset successfully!");
      },
      onFailure: (err) => {
        console.log(err);
        reject("Failed to reset password. Please try again.");
      },
    });
  });
};