import React from "react";
import "./login.css";
import UserLogin from "../auth/userLogin";
import "../../App.css";

const Login = ({ handleRegister }) => {
  const handleLogin = () => {
    handleRegister();
  };
  return (
    <>
      <div className="form-container">
        <img src="https://bit.ly/4dF4tSc" alt="logo" className="form-logo" />
        <UserLogin />
      </div>
    </>
  );
};

export default Login;
