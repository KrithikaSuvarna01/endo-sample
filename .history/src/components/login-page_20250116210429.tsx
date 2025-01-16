export const LoginPage = () => {
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        <div className=" bg-white absolute right-[32px] top-[32px] bottom-[32px]  w-[60.72vw]  rounded-[24px]"></div>
      </div>
    </div>
  );
};
