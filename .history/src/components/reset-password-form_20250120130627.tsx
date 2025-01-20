
export const ResetPasswordForm = () => { 
 
    return (
      <form className=" flex flex-col gap-5" > 
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C]" >New Password</label>
                  <input id="new-password" name="new-password"  className=" py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF] placeholder:text-s placeholder:font:normal 
                  placeholder:leading-4 outline-none " placeholder="Enter your new password" />
                </fieldset>
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C] flex justify-between" >Confirm New Password</label>
                  <input id="confirm-password" name="confirm-password"  type="password" className="  py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF]  outline-none placeholder:text[0.9375rem] placeholder:font:normal 
                  placeholder:leading-4" placeholder="Confirm your new password" />
                </fieldset>
                
                <button type="submit" className=" py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]">Reset Password</button>

              </form>
    )
}