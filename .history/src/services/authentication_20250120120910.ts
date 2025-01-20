import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js"
import { getUserPool } from "../lib/cognitoConfig";


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

          resolve({});
        },
          onFailure: (err) => reject(
            console.log(err),
        ),
        newPasswordRequired: () => {
          resolve("It requires new password");
        },
      });
    });

    return result;
        
    }catch (error) {
        console.log(error);
    }
    
}