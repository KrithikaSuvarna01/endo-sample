import { Space } from "lucide-react"
import { Link } from "react-router-dom"


export const NumberVerificationForm = () => { 
 
  return (
      
      <form className=" flex flex-col gap-5"> 
      <p className=" text-[#4B465C] font-semibold text-[0.9375rem] leading-[1.375rem]">Type your 6 digit OTP</p>
       <div className="flex gap-[19px] justify-center">
      <input 
        type="text" 
       
        className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input 
        type="text" 
        className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input 
        type="text" 
        className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input 
        type="text"
        className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input 
        type="text"
        className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input 
        type="text" 
        className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
                <button type="submit" className=" py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]">Verify my account</button>
<Link to='/' className=" justify-center items-center w-full flex font-normal text-[15px] leading-[22px] ">Didn't get the code? <span className="text-[#7367F0]">&nbsp;Resend</span></Link>
              </form>
    )
}