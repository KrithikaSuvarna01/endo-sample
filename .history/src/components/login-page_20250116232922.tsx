export const LoginPage = () => {
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        
        <div className=" bg-login-bg  absolute w-[56.72vw] right-[32px] top-[32px] bottom-[32px]  rounded-[24px] ">
          <div className="w-[68.47%] h-[64.58%] border-2 border-red-800 flex justify-center items-center">
<div className=" shadow-login bg-login-bg !z-50  w-[45.94%] h-[42.77%]  rounded-[58px] border-[2px] border-red-900 relative">
    <div style={{ backgroundImage: `url('/top-shape-login.svg')` }} className=" w-[42.32%]  h-[37.67%] bg-cover absolute left-[-12.22%] top-[-20.78%] z-0">

    </div>
    <div style={{ backgroundImage: `url('/bottom-shape-login.svg')` }}  className=" w-[32.1%] h-[29.03%] bg-cover absolute  right-[-12.22%] bottom-[-20.78%] z-0">

    </div>
</div>

        </div>
        </div>
      </div>
    </div>
  );
};
