import React from "react";
import UserRegister from "./userRegister";

function Signup({ handleRegister }) {
  const handleLogin = () => {
    handleRegister();
  };
  return (
    <div className="form-container">
      <UserRegister />
    </div>
  );
}

export default Signup;
