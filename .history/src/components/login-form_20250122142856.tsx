import toast from "react-hot-toast";
import { authenticate } from "../services/authentication";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";




export const LoginForm = () => { 
  const navigate = useNavigate();
  const { setCognitoUser } = useAuth();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
 async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
   event.preventDefault();
   

  const formData = new FormData(event.currentTarget);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  
  try {
  const result = await authenticate(email, password);
  console.log(result);
 if (result.status === "success") {
        toast.success("Successfully logged in!");
      } else if (result.status === "newPasswordRequired") {
         setCognitoUser(result.cognitoUser); // Store the CognitoUser instance in context
        toast.success("Password reset required. Redirecting...");
        navigate("/reset-password", {
          state: { userAttributes: result.userAttributes }, // Pass serializable attributes
        });
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error(error);
    }
  }
    return (
      <form className=" flex flex-col gap-5" onSubmit={handleLogin} > 
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C]" >Email</label>
                  <input id="email" name="email"  className=" py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF] placeholder:text[0.9375rem] placeholder:font:normal placeholder:leading-4 outline-none " placeholder="john.doe@gmail.com" />
                </fieldset>
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C] flex justify-between" >Password <span className=" text-[#7367F0]"><Link to='/forgot-password'>Forgot Password?</Link></span></label>
          <input id="password" name="password" type={isPasswordVisible ? 'text' : 'password'} className="  py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF]  outline-none relative" />
          <button
                  type="button"
                  onClick={() => {
                    setPasswordVisible(!isPasswordVisible);
                  }}
                  className="absolute inset-y-0 right-1 flex items-center pr-3 top-4 "
                >
                  {isPasswordVisible ? (
                    <EyeOff className=" h-5 w-4 " color="gray" />
                  ) : (
                    <Eye className=" h-5 w-4 " color="gray" />
                  )}
                </button>
                </fieldset>
                <fieldset className=" flex gap-[0.375rem]  items-end">
                  <input type="checkbox" className=" border-[0.0625rem] border-[#5e3acc] w-4 h-4" />
                  <p className="font-normal text-[0.8125rem] leading-[0.955rem]">
                    Remember Me
                  </p>
                </fieldset>
                <button type="submit" className=" py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]">Sign In</button>

              </form>
    )
}