import React from "react";
import { Logo, CloseButton } from "../../public/assets";

const UserLogin = ({ handleRegister, handlePostClick }) => {
  const handleLogin = () => {
    handleRegister();
  };

  const handleCloseEvent = () => {
    handlePostClick();
  };

  return (
    <div className="form-box">
      {handlePostClick && (
        <div className="form-title-module">
          <img
            src={CloseButton}
            alt="logo"
            onClick={handleCloseEvent}
            className="form-close-logo"
          />
        </div>
      )}

      <div className="form-super-title">WELCOME BACK</div>
      <div className="form-title">Log into your account</div>
      <form>
        <div className="form-input-title">Email or Username</div>
        <input
          type="text"
          placeholder="Enter your email or username"
          className="form-input"
        />
        <div className="form-password-style">
          <span className="form-input-title">Password</span>
          <span className="form-input-forgotpassword-title">
            Forgot password?
          </span>
        </div>
        <input
          type="password"
          placeholder="Enter your password"
          className="form-input"
        />
        <button type="submit" className="form-button">
          Login now
        </button>
      </form>
      <p className="form-not-register">
        Not registered yet?
        {handleRegister ? (
          <span className="login-register-link" onClick={handleLogin}>
            {" "}
            Register →
          </span>
        ) : (
          <a className="login-register-link" href="/signup">
            {" "}
            Register →
          </a>
        )}
      </p>
    </div>
  );
};

export default UserLogin;
