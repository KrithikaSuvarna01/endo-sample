import "./App.css";
import { LoginForm } from "./components/login-form";
import { LoginPage } from "./components/login-page";
import { ResetPasswordForm } from "./components/reset-password-form";

function App() {
  

  return <div className=" h-full w-full bg-red-600">
   
  <LoginPage title="Reset Password 👋" subtitle="Please enter your new password" image="/login-page-image-1.svg"><ResetPasswordForm /></LoginPage>
  </div>;
}

export default App;
