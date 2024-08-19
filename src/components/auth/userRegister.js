import React from "react";
import "../../App.css";

const UserRegister = ({ handleLogin, handlePostClick }) => {
  const handleLogins = () => {
    handleLogin();
  };
  const handleCloseEvent = () => {
    handlePostClick();
  };
  return (
    <div className="form-box">
      {handlePostClick && (
        <div className="form-title-module">
          <img
            src="https://bit.ly/4dRyDSh"
            alt="logoclose"
            onClick={handleCloseEvent}
            className="form-close-logo"
          />
        </div>
      )}

      <div className="form-super-title">SIGN UP</div>

      <div className="form-title">Create an account to continue</div>
      <form>
        <div className="form-input-title">Email</div>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-input"
        />
        <div className="form-input-title">Username</div>
        <input
          type="text"
          placeholder="Choose a preferred username"
          className="form-input"
        />
        <div className="form-input-title">Password</div>
        <input
          type="password"
          placeholder="Choose a strong password"
          className="form-input"
        />
        <button type="submit" className="form-button">
          Continue
        </button>
      </form>
      <p className="form-not-register">
        Already have an account?
        {handleLogin ? (
          <span className="login-register-link" onClick={handleLogins}>
            {" "}
            Login →
          </span>
        ) : (
          <a className="login-register-link" href="/login">
            {" "}
            Login →
          </a>
        )}
      </p>
    </div>
  );
};

export default UserRegister;
