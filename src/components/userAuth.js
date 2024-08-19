import React, { useState, useCallback } from "react";
import "./login.css";
import Login from "./loginpage";
import Signup from "./Signup";
import UserRegister from "./userRegister";
import UserLogin from "./userLogin";

function UserAuth({ handlePostClick }) {
  const [register, setRegister] = useState(true);
  const handleRegister = useCallback(() => {
    setRegister(!register);
  });

  return (
    <>
      <div>
        <>
          {register ? (
            <UserLogin
              handleRegister={handleRegister}
              handlePostClick={handlePostClick}
            />
          ) : (
            <UserRegister
              handleLogin={handleRegister}
              handlePostClick={handlePostClick}
            />
          )}
        </>
      </div>
    </>
  );
}

export default UserAuth;
