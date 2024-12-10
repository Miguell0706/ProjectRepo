import React from "react";
import { Link } from "react-router-dom";

const Login = ({ showLogInModal }) => {
  console.log(showLogInModal);
  if (!showLogInModal) {
    return null;
  }

  return (
    <div className="login-form">
      <h1>Log in to YourYouthBook</h1>
      <label htmlFor="email">Username</label>
      <input type="username" id="username" name="username" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <div className="checkbox-container">
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <button type="submit">Log In</button>
      <div className="forgot-password-container">
        <a href="#">Lost your password?</a>
        <Link to="/">
          <i className="icofont-long-arrow-left">Back to Home</i>
        </Link>
      </div>
    </div>
  );
};

export default Login;
