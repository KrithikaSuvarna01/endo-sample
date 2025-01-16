export const LoginPage = () => {
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        <div className=" bg-login-bg absolute w-[56.72vw] right-[32px] top-[32px] bottom-[32px]  rounded-[24px] flex justify-center items-center">
<div className=" shadow-login  w-[54.94%] h-[75.7%]  rounded-[58px] border-[2px] border-red-900 relative">
    <div style={{ backgroundImage: `url('/top-shape-login.svg')` }} className=" w-[238px] h-[234px] bg-cover absolute left-[-55px] bottom-[91px]">

    </div>
    <div style={{ backgroundImage: `url('/bottom-shape-login.svg')` }}>

    </div>
</div>

        </div>
      </div>
    </div>
  );
};
