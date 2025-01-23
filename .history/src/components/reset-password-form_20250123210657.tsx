import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { Link } from "react-router-dom";
import {ChevronLeft} from 'lucide-react'
import { confirmForgotPassword } from "../services/authentication";



export const ResetPasswordForm = () => { 
   
  const { cognitoUser } = useAuth(); // Retrieve CognitoUser from context
  const navigate = useNavigate();
   const location = useLocation();
const { userAttributes,email,isFirstLogin,otp ,loadingToast} = location.state || {};
  
  const handlePasswordReset = async (event: React.FormEvent<HTMLFormElement>) => {  
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
    const newPassword = formData.get("new-password") as string;
    
     toast.dismiss(loadingToast);

 

    try {
      if (isFirstLogin) {
         if (!cognitoUser) {
    toast.error("Session expired. Please try logging in again.");
    navigate("/");
    return;
  }
        const mutableAttributes = { ...userAttributes };
    console.dir(userAttributes,{depth:null})
    const nonMutableAttributes = [
      "email_verified", "phone_number_verified", "sub", "phone_number", "email"
    ];

    nonMutableAttributes.forEach((attr) => delete mutableAttributes[attr]);

    
       await new Promise((resolve, reject) => {
      cognitoUser?.completeNewPasswordChallenge(newPassword, mutableAttributes, {
        onSuccess: (data) => {
        console.log("Code sent for password reset:", data);
        resolve(data);
      },
         onFailure: (err) => {
            console.error("Authentication failed:", err);
            reject(err);
          },
      });
       });
        toast.success("Password reset successfully! Redirecting to login...");
        navigate("/");
      } else {
         try {
      await confirmForgotPassword(email, otp,newPassword);
       toast.success("Password reset successfully! Redirecting to login...");
        navigate("/");
    
    } catch (err: any) {
      toast.error(err.message || "OTP verification failed. Try again.");
      console.error(err);
    }
    }
   

    
  } catch (error) {
    toast.error("Password reset failed. Please try again.");
    console.error(error);
  }
}
    return (
      <form className=" flex flex-col gap-5" onSubmit={handlePasswordReset} > 
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C]" >New Password</label>
          <input type="password" id="new-password" name="new-password" className=" py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF]  outline-none "  />
                </fieldset>
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C] flex justify-between" >Confirm Password</label>
          <input id="confirm-password" name="confirm-password" type="password" className="  py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF]  outline-none "  />
                </fieldset>
                
                <button type="submit" className=" py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]">Reset</button>
<Link to='/' className=" justify-center items-center w-full flex font-normal text-[15px] leading-[22px] text-[#7367F0]"><ChevronLeft className="w-6 h-6" /> Back to log in</Link>
              </form>
    )
}