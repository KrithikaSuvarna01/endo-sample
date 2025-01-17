


export const LoginPage = () => {

  const inputStyle =
    "rounded-lg border-2 border-purple-300 px-3 py-2 outline-none text-sm focus:border-purple-400";
  return (
    <div className="bg-custom-gradient w-full h-full relative">
      {/* Background Image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/login-background-image.svg')` }}
      >
        
        <div className=" bg-login-bg  absolute w-[56.72vw] right-[1.62%] top-[3.21%] bottom-[3.21%]  rounded-[24px] flex justify-center items-center ">
          <div className="w-[68.47%] h-[64.58%] border-2 border-red-800 flex justify-center items-center relative">
<div className=" shadow-login bg-login-bg !z-50  w-[87.20%] h-[70.65%]  rounded-[58px] border-[2px] border-pink-900 ">
   <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome to Endodontist 👋
          </h1>
          <p className="text-gray-600">
            Please sign in to your account
          </p>
        </div>

        <div>
        <h1 className="text-[22px]">Welcome to Endodontist 👋</h1>
        <p className="text-sm">Please sign in to your account</p>
      </div>
      <p className="-my-4 text-xs text-red-400">{errorMessage.general}</p>
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className={inputStyle}
            placeholder="john.doe@gmail.com"
            type="email"
          />
        </fieldset>
        <p className="-my-4 text-xs text-red-400">{errorMessage.email}</p>
        <fieldset>
          <label htmlFor="password">Password</label>
          <div className={cn(inputStyle, "relative overflow-hidden p-0")}>
            <input
              id="password"
              name="password"
              className="w-[90%] px-3 py-2 outline-none"
              type={showPassword ? "text" : "password"}
              max={20}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 transform space-x-reverse text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fa-regular fa-eye-slash"></i>
              ) : (
                <i className="fa-regular fa-eye"></i>
              )}
            </button>
          </div>
        </fieldset>
        <p className="-my-4 text-xs text-red-400">{errorMessage.password}</p>
        <fieldset className="!flex !flex-row items-center">
          <CheckBox className="text-[#a49cf5]" />
          <label>Remember Me</label>
        </fieldset>
        <button
          className="w-full rounded-lg bg-[#a49cf5] p-2 text-sm text-white"
          type="submit"
        >
          {loading ? (
            <>
              Signing In <i className="fa-solid fa-spinner animate-spin"></i>
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    
      </div>
    </div>
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
        <div className=" absolute top-[22.58vh] left-[4.14vw]   flex flex-col items-center gap-[0.0625rem]">
<img src='/login-page-image-1.svg' className=" w-[28vw] h-[50vh]" />
<h3 className=" max-w-[424px] font-[500] text-[#4B465C] text-2xl flex flex-col items-center">Enter your details to Sign in
<span>to your account</span></h3>
        </div>
      </div>
   
  );
};
