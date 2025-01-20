import "./App.css";
import { LoginForm } from "./components/login-form";
import { LoginPage } from "./components/login-page";

function App() {
  

  return <div className=" h-full w-full bg-red-600">
   
  <LoginPage title="Welcome to Endodontist 👋" subtitle="Please sign in to your account" image="/login-page-image-1.svg"><LoginForm /></LoginPage>
  </div>;
}

export default App;
