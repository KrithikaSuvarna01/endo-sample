import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";


export const ResetPasswordForm = () => { 
  const { cognitoUser } = useAuth(); // Retrieve CognitoUser from context
  const location = useLocation();
  const navigate = useNavigate();
  const { userAttributes } = location.state || {};

  async function handlePasswordReset(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newPassword = formData.get("newPassword") as string;

    if (!cognitoUser) {
      toast.error("Session expired. Please try logging in again.");
      navigate("/");
      return;
    }

    try {
      await new Promise((resolve, reject) => {
        cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, {
          onSuccess: resolve,
          onFailure: reject,
        });
      });
      toast.success("Password reset successfully! Redirecting to login...");
      navigate("/");
    } catch (error) {
      toast.error("Password reset failed. Please try again.");
      console.error(error);
    }
  }
    return (
      <form className=" flex flex-col gap-5" onSubmit={handlePasswordReset} > 
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C]" >New Password</label>
                  <input type="password" id="new-password" name="new-password"  className=" py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF] placeholder:text-sm placeholder:font:normal 
                  placeholder:leading-4 outline-none " placeholder="Enter your new password" />
                </fieldset>
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C] flex justify-between" >Confirm New Password</label>
                  <input id="confirm-password" name="confirm-password"  type="password" className="  py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF]  outline-none placeholder:text-sm placeholder:font:normal 
                  placeholder:leading-4" placeholder="Confirm your new password" />
                </fieldset>
                
                <button type="submit" className=" py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]">Reset Password</button>

              </form>
    )
}