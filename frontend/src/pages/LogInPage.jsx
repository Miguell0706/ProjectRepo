import React from "react";
import "../styles/loginPage.css";

const LogInPage = () => {
  return (
    <div className="login-page-container">
      <image></image>
      <div className="login-form-container">
        <h1>Log in to YourYouthBook</h1>
        <form>
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
            <i className="icofont-long-arrow-left">Back to Home</i>
          </div>
          <div className="sign-in-tab">
            <i className="icofont-long-arrow-left">Sign in</i>
          </div>
          <div className="register-tab">
            <i class="icofont-long-arrow-left">Registration</i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
