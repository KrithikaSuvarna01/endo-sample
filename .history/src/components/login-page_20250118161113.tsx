


export const LoginPage = ({children,title,subtitle,image}:{children:React.ReactNode,title?:string,subtitle?:string,image?:string}) => {
  
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        
        <div className=" bg-login-bg   absolute w-[56.72vw] right-[1.62%] top-[3.21%] bottom-[3.21%]  rounded-3xl flex justify-center items-center ">
          <div className="px-[60px] py-[65px]  flex justify-center items-center relative ">

            <div className="  shadow-[rgba(13,_38,_76,_0.10)_0px_9px_20px]  bg-login-bg !z-50 bg-login px-[32px]  py-[52px] rounded-2xl gap-[42px] flex flex-col ">
              <div className=" max-w-[386px] flex flex-col justify-start gap-[6px]">
                <h1 className=" text-2xl font-medium text-[#4B465C]">{ title}</h1>
                <h2 className="font-normal text-[15px] leading-[22px]">{subtitle}</h2>
              </div>

{children}
              
   </div>
    <img src='/top-shape-login.svg' className=" w-[42.32%]  h-[37.67%] bg-cover absolute left-0 top-0 z-0">
</img>
  
    <img  src='/login-form-bottom.png'  className=" w-[32.08%] h-[29.03%] bg-cover absolute  right-0 bottom-0 z-0 ">

    
</img>

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
<img src={image} className=" w-[28vw] h-[50vh]" />
<h3 className=" max-w-[424px] font-[500] text-[#4B465C] text-2xl flex flex-col items-center">Enter your details to Sign in
<span>to your account</span></h3>
        </div>
      </div>
   
  );
};
