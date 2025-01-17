

// import { InputLabel } from "@mui/material";
// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Eye, EyeOff } from "lucide-react";

export const LoginPage = () => {
  
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        
        <div className=" bg-login-bg   absolute w-[56.72vw] right-[1.62%] top-[3.21%] bottom-[3.21%]  rounded-[24px] flex justify-center items-center ">
          <div className="w-[68.47%] py-[91px]  flex justify-center items-center relative ">

            <div className="  shadow-[rgba(13,_38,_76,_0.10)_0px_9px_20px]  bg-login-bg !z-50 bg-login py-[52px] px-[32px] rounded-2xl gap-[42px] flex flex-col ">
              <div className=" max-w-[386px] flex flex-col justify-start gap-[6px]">
                <h1 className=" text-2xl font-medium text-[#4B465C]">Welcome to Endodontist 👋</h1>
                <h2 className="font-normal text-[15px] leading-[22px]">Please sign in to your account</h2>
              </div>
              <form className=" flex flex-col gap-5"> 
                <fieldset className=" flex flex-col gap-[16px]">
                  <label className="font-normal text-[13px] leading-[15.28px] text-[#4B465C]" >Email</label>
                  <input id="email"  className=" py-[7px] px-[14px] w-full max-h-[38px] rounded-[10px] border-[1px] border-[#B8A0FF] placeholder:text[15px] placeholder:font:normal placeholder:leading-4 outline-none " placeholder="john.doe@gmail.com" />
                </fieldset>
                <fieldset className=" flex flex-col gap-[16px]">
                  <label className="font-normal text-[13px] leading-[15.28px] text-[#4B465C] flex justify-between" >Password <span className=" text-[#7367F0]">Forgot Password?</span></label>
                  <input id="email"  type="password" className=" py-[7px] px-[14px] w-full max-h-[38px] rounded-[10px] border-[1px] border-[#B8A0FF]  outline-none"  />
                </fieldset>
                <fieldset className=" flex gap-[6px]  items-end">
                  <input type="checkbox" className=" border-[1px] border-[#5e3acc] w-4 h-4" />
                  <p className="font-normal text-[13px] leading-[15.28px]">
                    Remember Me
                  </p>
                </fieldset>
                <button className=" py-[10px] bg-[#7367F0] leading-[18px] font-medium text-[15px] text-[#FFFFFF]">Sign In</button>

              </form>

              
   </div>
    <div style={{ backgroundImage: `url('/top-shape-login.svg')` }} className=" w-[42.32%]  h-[37.67%] bg-cover absolute left-0 top-0 z-0">
</div>
  
    <div  style={{ backgroundImage: `url('/bottom-shape-login.svg')`}}  className=" w-[32.08%] h-[29.03%] bg-cover absolute  right-0 bottom-0 z-0 ">

    
</div>

        </div>
        </div>
        
          <div className="  flex align-baseline gap-[0.61%] absolute top-[6.25%] left-[4.44%]">
            <img src="/tooth.svg" className="h-full " />
            <div className=" flex flex-col gap-[5.88%] justify-end  items-center">
            <h1 className=" text-[2rem] leading-[35.2px] font-semibold">ENDO<span className="text-main-text">DONTIST</span></h1>
            <span className=" font-thin tracking-[0.24em] text-xs text-something">YOUR SMILE, OUR EXPERTISE</span>
          </div>
          </div>
        </div>
        <div className=" absolute top-[22.58vh] left-[4.14vw]   flex flex-col items-center gap-[0.0625rem]">
<img src='/login-page-image-1.svg' className=" w-[28vw] h-[50vh]" />
<h3 className=" max-w-[424px] font-[500] text-[#4B465C] text-2xl flex flex-col items-center">Enter your details to Sign in
<span>to your account</span></h3>
        </div>
      </div>
   
  );
};
