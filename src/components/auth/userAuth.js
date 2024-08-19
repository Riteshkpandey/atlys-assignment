import React, { useState, useCallback } from "react";
import "../login/login.css";
import UserRegister from "./userRegister";
import UserLogin from "./userLogin";
import "../../App.css";

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
