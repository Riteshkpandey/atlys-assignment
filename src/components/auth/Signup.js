import React from "react";
import UserRegister from "./userRegister";
import "../../App.css";

function Signup({ handleRegister }) {
  const handleLogin = () => {
    handleRegister();
  };
  return (
    <div className="form-container">
      <img src="https://bit.ly/4dF4tSc" alt="logo" className="form-logo" />
      <UserRegister />
    </div>
  );
}

export default Signup;
