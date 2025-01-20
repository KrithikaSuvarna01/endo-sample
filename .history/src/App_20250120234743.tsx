import "./App.css";
import { LoginForm } from "./components/login-form";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from "./components/login-page";
import { ResetPasswordForm } from "./components/reset-password-form";


function App() {
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage title="Welcome to Endodontist 👋" text1="" text2="" image="/login-page-image-1.svg" subtitle="Please sign in to your account" children={<LoginForm />} />} />
        <Route path="/reset-password" element={<LoginPage title="Reset Password 🔒" text1="Enter your new password" text2="for account access." image='/reset-password-img.svg' subtitle="Please enter your email address" children={<ResetPasswordForm />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
