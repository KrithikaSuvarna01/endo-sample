export const LoginPage = () => {
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className=" w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        <div className=" bg-white  left-[120px] top-[10px] border-2 border-black width-[56.72vw] height-[66.48vh]"></div>
      </div>
    </div>
  );
};
