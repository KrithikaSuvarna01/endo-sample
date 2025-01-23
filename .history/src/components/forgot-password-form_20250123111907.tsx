import { ChevronLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { initiateForgotPassword } from "../services/authentication";
import toast from "react-hot-toast";




export const ForgotPasswordForm = () => { 

  async function handleForgotPassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
     const navigate = useNavigate();
   

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
     initiateForgotPassword(email)
  .then((data) => {
    console.log("Forgot Password Flow Initiated:", data);
    toast.success("Password reset email sent!");
     navigate("/otp-verification",{state:{email}});
  })
       .catch((err) => {
    toast.error("Password reset failed. Please try again.");
    console.error("Error during forgot password:", err);
  });

  }
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