import React, { useState } from "react";
import "../styles/loginPage.css";
import Login from "../components/LoginPageComponents/Login";
import Register from "../components/LoginPageComponents/Register";

const LogInPage = () => {
  const [showLogInModal, setShowLogInModal] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Handle form submit
  const handleLoginSubmit = async (formData) => {
    // You can perform your login logic here
    console.log("Login Data:", formData);
  };

  const handleRegisterSubmit = async (formData) => {
    // You can perform your registration logic here
    console.log("Register Data:", formData);
  };

  return (
    <div className="login-page-container">
      <image></image>
      <div className="login-form-container">
        <form>
          {/* Modals */}
          <Login
            showLogInModal={showLogInModal}
            handleSubmit={handleLoginSubmit} // Pass handleSubmit for login
          />
          <Register
            showRegisterModal={showRegisterModal}
            handleSubmit={handleRegisterSubmit} // Pass handleSubmit for register
          />

          {/* Tabs */}
          <div
            className={`sign-in-tab ${showLogInModal ? "active" : ""}`}
            onClick={() => {
              setShowLogInModal(true);
              setShowRegisterModal(false);
            }}
          >
            <i className="icofont-long-arrow-left">Sign in</i>
          </div>
          <div
            className={`register-tab ${showRegisterModal ? "active" : ""}`}
            onClick={() => {
              setShowLogInModal(false);
              setShowRegisterModal(true);
            }}
          >
            <i className="icofont-long-arrow-left">Registration</i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
