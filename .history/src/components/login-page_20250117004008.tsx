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
        <div>
          <div className=" flex align-baseline gap-[6.27px] absolute top-[64px] left-[64px]">
            <img src="/tooth.svg" className="h-[60px] w-[56.73px]" />
            <div className=" flex flex-col gap-[3px] justify-center  w-[250px] items-center">
            <h1 className=" text-[32px] leading-[35.2px] font-semibold">ENDO<span className="text-main-text">DONTIST</span></h1>
            <h3 className=" font-thin text-[12px] leading-[13.2px] tracking-[0.3em] text-something">YOUR SMILE, OUR EXPERTISE</h3>
          </div>
          </div>
        </div>
        <div className=" absolute top-[200px] left-[44px]">
<img src='/login-page-image-1.svg' className=" w-[400px] h-[400px]" />
        </div>
      </div>
    </div>
  );
};
