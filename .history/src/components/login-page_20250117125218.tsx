export const LoginPage = () => {
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        
        <div className=" bg-login-bg  absolute w-[56.72vw] right-[1.62%] top-[3.21%] bottom-[3.21%]  rounded-[24px] flex justify-center items-center ">
          <div className="w-[68.47%] h-[64.58%] border-2 border-red-800 flex justify-center items-center relative">
<div className=" shadow-login bg-login-bg !z-50  w-[87.20%] h-[70.65%]  rounded-[58px] border-[2px] border-red-900 ">
    <div style={{ backgroundImage: `url('/top-shape-login.svg')` }} className=" w-[42.32%]  h-[37.67%] bg-cover absolute left-0 top-0 z-0">

    </div>
    <img src="/bottom-shape-login.svg"  className=" w-[32.08%] h-[29.03%] bg-cover absolute border-2 border-red-800 right-0 bottom-0 z-0">

    </img>
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
        <div className=" absolute top-[180px] left-[74px]">
<img src='/login-page-image-1.svg' className=" w-[28vw] h-[50vh]" />
<h3 className=" max-w-[424px] font-[500] text-something text-xl flex flex-col items-center">Enter your details to Sign in
<span>to your account</span></h3>
        </div>
      </div>
   
  );
};
