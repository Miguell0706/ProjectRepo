import React from "react";
import { Link } from "react-router-dom";

const Register = ({ showRegisterModal }) => {
  if (!showRegisterModal) {
    return null; // Do not render anything if the modal shouldn't be shown
  }

  return (
    <div className="register-form">
      <h1>Register to YourYouthBook</h1>
      <label htmlFor="email">Username</label>
      <input type="username" id="username" name="username" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <label htmlFor="password2">Confirm Password</label>
      <input type="password2" id="password2" name="password2" required />
      <button type="submit">Register</button>
      <div className="forgot-password-container">
        <Link to="/">
          <i className="icofont-long-arrow-left">Back to Home</i>
        </Link>
      </div>
    </div>
  );
};

export default Register;
