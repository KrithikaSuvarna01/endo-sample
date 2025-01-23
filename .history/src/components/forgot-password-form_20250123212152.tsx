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

    // Normalize input
    let normalizedInput = input;

    // If it's a phone number, prepend +91
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (phoneNumberRegex.test(input)) {
      normalizedInput = `+91${input}`;
    }

    // If it's a valid email or phone number, proceed
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(input) && !phoneNumberRegex.test(input)) {
      toast.error("Please enter a valid email or phone number.");
      return;
    }

    // Call the API with the normalized input
    try {
      await initiateForgotPassword(normalizedInput);
      toast.success("OTP sent! Check your email/SMS.");
      navigate("/otp-verification", { state: { input: normalizedInput } });
    } catch (err: any) {
      toast.error(err.message || "Password reset failed. Try again.");
      console.error(err);
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