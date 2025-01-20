import "./App.css";
import { LoginForm } from "./components/login-form";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from "./components/login-page";
import { ResetPasswordForm } from "./components/reset-password-form";


function App() {
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage title="Welcome to Endodontist 👋" image="/login-page-image-1.svg" subtitle="Please sign in to your account" children={<LoginForm />} />} />
        <Route path="/forgot-password" element={<LoginPage title="Reset Password 🔒" image='/reset-password-img.svg' subtitle="Please enter your email address" children={<ResetPasswordForm />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
