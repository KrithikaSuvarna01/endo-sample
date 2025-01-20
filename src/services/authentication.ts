import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js"
import { getUserPool } from "../lib/cognitoConfig";
import Cookies from 'js-cookie';


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