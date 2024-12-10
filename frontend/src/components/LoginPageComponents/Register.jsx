import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ showRegisterModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!showRegisterModal) {
    return null; // Do not render anything if the modal shouldn't be shown
  }

  return (
    <div className="register-form">
      <h1>Register to YourYouthBook</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password</label>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          required
        />
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <i class="icofont-duotone icofont-eye-open"></i>
          ) : (
            <i class="icofont-duotone icofont-eye-close"></i>
          )}
        </button>
      </div>

      <label htmlFor="password2">Confirm Password</label>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password2"
          name="password2"
          required
        />
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <i class="icofont-duotone icofont-eye-open"></i>
          ) : (
            <i class="icofont-duotone icofont-eye-close"></i>
          )}
        </button>
      </div>

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
