import React from "react";
import { Logo, CloseButton } from "../../public/assets";
import "./login.css";
import UserLogin from "./userLogin";

const Login = ({ handleRegister }) => {
  const handleLogin = () => {
    handleRegister();
  };
  return (
    <>
      <div className="form-container">
        <img src={Logo} alt="logo" className="form-logo" />
        <UserLogin />
      </div>
    </>
  );
};

export default Login;
