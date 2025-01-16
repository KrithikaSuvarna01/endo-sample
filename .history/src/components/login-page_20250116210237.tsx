export const LoginPage = () => {
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        <div className=" bg-white absolute right-0 top-0 bottom-0 border-2 border-black w-[60.72vw]"></div>
      </div>
    </div>
  );
};
