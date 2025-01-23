import { Link } from "react-router-dom"




export const ForgotPasswordForm = () => { 
 
    return (
      <form className=" flex flex-col gap-5"  > 
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C]" >Email/mobile</label>
                  <input id="email" name="email"  className=" py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF] placeholder:text[0.9375rem] placeholder:font:normal placeholder:leading-4 outline-none " placeholder="Enter here" />
                </fieldset>
               
                <button type="submit" className=" py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]">Send</button>

              <Link to='/' className=" justify-center items-center w-full flex font-normal text-[15px] leading-[22px] text-[#7367F0]"><ChevronLeft className="w-6 h-6" /> Back to log in</Link>
              </form>
    )
}