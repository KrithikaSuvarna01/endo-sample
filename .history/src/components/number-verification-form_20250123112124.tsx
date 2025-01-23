import { CognitoUser } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserPool } from "../lib/cognitoConfig";

export const NumberVerificationForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Retrieve email from state

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    setError(""); // Clear previous error
    const otp = Array.from({ length: 6 })
      .map((_, i) => event.target[`otp-${i}`]?.value || "")
      .join("");

    const userPool = getUserPool(
      import.meta.env.VITE_USER_POOL_ID,
      import.meta.env.VITE_CLIENT_ID
    );

    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.confirmRegistration(otp, true, (err, result) => {
      if (err) {
        console.error("OTP Verification Error:", err);
        setError(err.message || "OTP Verification failed. Please try again.");
        return;
      }
      console.log("OTP verified successfully");
      navigate("/reset-password", { state: { email } });
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleOTPSubmit}>
      <p className="text-[#4B465C] font-semibold text-[0.9375rem] leading-[1.375rem]">
        Type your 6-digit OTP
      </p>
      <div className="flex gap-[19px] justify-center">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              name={`otp-${i}`}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="py-[0.625rem] bg-[#7367F0] leading-[1.125rem] font-medium text-[0.9375rem] text-[#FFFFFF]"
      >
        Verify my account
      </button>
      <Link
        to="/"
        className="justify-center items-center w-full flex font-normal text-[15px] leading-[22px]"
      >
        Didn't get the code?{" "}
        <span className="text-[#7367F0]">&nbsp;Resend</span>
      </Link>
    </form>
  );
};
