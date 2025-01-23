

import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { confirmForgotPassword } from "../services/authentication";
import { useAuth } from "../hooks/auth";

export const NumberVerificationForm = () => {
 const navigate = useNavigate();
  const location = useLocation();
   const { setCognitoUser } = useAuth();
  const { email } = location.state || {};

  


  const handleOTPSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otp = Array.from({ length: 6 })
      .map((_, i) => e.target[`otp-${i}`]?.value || "")
      .join("");

    console.log(otp)

    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const { userAttributes, cognitoUser } = await confirmForgotPassword(email, otp);
      setCognitoUser(cognitoUser); 
      toast.success("OTP verified! Set a new password.");
      console.dir(userAttributes,{depth:null})
      navigate("/reset-password", { state: { userAttributes:userAttributes } });
    } catch (err: any) {
      toast.error(err.message || "OTP verification failed. Try again.");
      console.error(err);
    }
  };

  if (!email) {
    toast.error("No email found! Redirecting to Forgot Password...");
    navigate("/forgot-password");
    return null;
  }
  return (
    <form className="flex flex-col gap-5" onSubmit={handleOTPSubmit}>
      <p className="text-[#4B465C] font-semibold text-[0.9375rem] leading-[1.375rem]">
        Type your 6-digit OTP
      </p>
      <div className="flex gap-[19px] justify-center">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              name={`otp-${i}`}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          ))}
      </div>
    
      <button
        type="submit"
        className="py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]"
      >
        Verify my account
      </button>
    </form>
  );
};
