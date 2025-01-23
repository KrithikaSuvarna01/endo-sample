import { ChevronLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { initiateForgotPassword } from "../services/authentication";
import toast from "react-hot-toast";




export const ForgotPasswordForm = () => { 
  const navigate = useNavigate();

const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get("email") as string;

    // Check if it's a valid email address
    const emailRegex = /\S+@\S+\.\S+/;
    const isEmail = emailRegex.test(input);

    if (isEmail) {
      // It's an email, proceed as usual
      try {
        await initiateForgotPassword(input);
        toast.success("OTP sent! Check your email.");
        navigate("/otp-verification", { state: { email: input } });
      } catch (err: any) {
        toast.error(err.message || "Password reset failed. Try again.");
        console.error(err);
      }
    } else {
      // It's a phone number, format it by adding the +91 country code
      const phoneNumberRegex = /^[0-9]{10}$/;
      if (phoneNumberRegex.test(input)) {
        const formattedPhoneNumber = `+91${input}`;

        try {
          await initiateForgotPassword(formattedPhoneNumber);
          toast.success("OTP sent! Check your SMS.");
          navigate("/otp-verification", { state: { phoneNumber: formattedPhoneNumber } });
        } catch (err: any) {
          toast.error(err.message || "Password reset failed. Try again.");
          console.error(err);
        }
      } else {
        toast.error("Please enter a valid email or phone number.");
      }
    }
  };
    return (
      <form className=" flex flex-col gap-5" onSubmit={handleForgotPassword}  > 
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C]" >Email/mobile</label>
                  <input id="email" name="email"  className=" py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF] placeholder:text[0.9375rem] placeholder:font:normal placeholder:leading-4 outline-none " placeholder="Enter here" />
                </fieldset>
               
                <button type="submit" className=" py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]">Send</button>

              <Link to='/' className=" justify-center items-center w-full flex font-normal text-[15px] leading-[22px] text-[#7367F0]"><ChevronLeft className="w-6 h-6" /> Back to log in</Link>
              </form>
    )
}