import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ showRegisterModal, handleSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if form is invalid

    try {
      // Send formData to backend API
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors([result.message || "Registration failed."]);
      } else {
        alert("Registration successful!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrors(["An unexpected error occurred. Please try again later."]);
    }
  };

  if (!showRegisterModal) {
    return null; // Do not render anything if the modal shouldn't be shown
  }
  return (
    <div className="register-form">
      <h1>Register to YourYouthBook</h1>
      {errors.length > 0 && (
        <p className="error-message">
          {errors.map((err, index) => (
            <span key={index}>{err}</span>
          ))}
        </p>
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
