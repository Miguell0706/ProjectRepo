import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ showLogInModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  if (!showLogInModal) {
    return null;
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate inputs
  const validateForm = () => {
    const newErrors = [];
    if (!formData.username.trim()) newErrors.push("Username is required.");
    if (!formData.password) newErrors.push("Password is required.");

    setErrors(newErrors);
    return newErrors.length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post(`/api/users/login`, {
        username: formData.username,
        password: formData.password,
      });

      // Handle success response
      setSuccessMessage("Login successful!");
      setFormData({ username: "", password: "" });

      // Redirect or store authentication token (if applicable)
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        // Redirect to dashboard or home
        window.location.href = "/";
      }
    } catch (error) {
      // Handle error response
      const errorMessage =
        error.response?.data?.message || "An error occurred during login.";
      setErrors([errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Log in to YourYouthBook</h1>
      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="error-message">
          {errors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
        </div>
      )}
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
      {/* Username Field */}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
        disabled={isSubmitting}
      />
      {/* Password Field */}
      <label htmlFor="password">Password</label>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <i className="icofont-duotone icofont-eye-open"></i>
          ) : (
            <i className="icofont-duotone icofont-eye-close"></i>
          )}
        </button>
      </div>

      {/* Remember Me Checkbox */}
      <div className="checkbox-container">
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Log In"}
      </button>
      {/* Forgot Password and Back to Home */}
      <div className="forgot-password-container">
        <a href="#">Lost your password?</a>
        <Link to="/">
          <i className="icofont-long-arrow-left">Back to Home</i>
        </Link>
      </div>
    </form>
  );
};

export default Login;
