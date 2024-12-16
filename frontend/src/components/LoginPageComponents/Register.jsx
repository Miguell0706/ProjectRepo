import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = ({ showRegisterModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate inputs
  const validateForm = () => {
    const newErrors = [];

    if (!formData.username.trim()) newErrors.push("Username is required.");
    if (!formData.password) newErrors.push("Password is required.");
    if (formData.password.length < 6)
      newErrors.push("Password must be at least 6 characters.");
    if (formData.password !== formData.confirmPassword)
      newErrors.push("Passwords do not match.");

    setErrors(newErrors);
    return newErrors.length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`/api/users/register`, {
        username: formData.username,
        password: formData.password,
      });

      setSuccessMessage("Registration successful! You can now log in.");
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      // Handle Axios error response
      const errorMessage =
        error.response?.data?.message || "An error occurred while registering.";
      setErrors([errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showRegisterModal) {
    return null; // Do not render anything if the modal shouldn't be shown
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>Register to YourYouthBook</h1>
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

      {/* Confirm Password Field */}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
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

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </button>
      <div className="forgot-password-container">
        <Link to="/">
          <i className="icofont-long-arrow-left">Back to Home</i>
        </Link>
      </div>
    </form>
  );
};

export default Register;
