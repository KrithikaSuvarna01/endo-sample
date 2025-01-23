



export const LoginSuccessful = () => { 

    return (
      <form className=" flex flex-col gap-5" > 
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C]" >Email</label>
                  <input id="email" name="email"  className=" py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF] placeholder:text[0.9375rem] placeholder:font:normal placeholder:leading-4 outline-none " placeholder="john.doe@gmail.com" />
                </fieldset>
                <fieldset className=" flex flex-col gap-[0.3125rem]">
                  <label className="font-normal text-[0.8125rem] leading-[0.955rem] text-[#4B465C] flex justify-between" >Password <span className=" text-[#7367F0]">Forgot Password?</span></label>
                  <input id="password" name="password"  type="password" className="  py-[0.4375rem] px-[0.875rem] w-full max-h-[8.68%] rounded-[0.625rem] border-[0.0625rem] border-[#B8A0FF]  outline-none"  />
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