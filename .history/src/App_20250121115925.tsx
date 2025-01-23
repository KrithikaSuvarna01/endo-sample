import "./App.css";
import { LoginForm } from "./components/login-form";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from "./components/login-page";
import { ResetPasswordForm } from "./components/reset-password-form";
import { ForgotPasswordForm } from "./components/forgot-password-form";


function App() {
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage title="Welcome to Endodontist 👋" text1="Enter your details" text2="to Sign in
to your account" image="/login-page-image-1.svg" subtitle="Please sign in to your account" children={<LoginForm />} />} />
        <Route path="/reset-password" element={<LoginPage title="Reset Password 🔒" text1="Enter your new password" text2="for account access." image='/reset-password-img.svg' subtitle="Please enter your email address" children={<ResetPasswordForm />} />} />
        <Route path="/forgot-password" element={<LoginPage title="Forgot Password? 🔒" text1="Enter email to Reset Password" text2="of your account" image='/forgot-password-img.svg' subtitle="Enter your email ID or mobile number to reset your password" children={<ForgotPasswordForm />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
