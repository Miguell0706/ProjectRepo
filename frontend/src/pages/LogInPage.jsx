import React, { useState } from "react";
import "../styles/loginPage.css";
import Login from "../components/LoginPageComponents/Login";
import Register from "../components/LoginPageComponents/Register";

const LogInPage = () => {
  const [showLogInModal, setShowLogInModal] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="login-page-container">
      <image></image>
      <div className="login-form-container">
        {/* Modals */}
        <Login showLogInModal={showLogInModal} />
        <Register showRegisterModal={showRegisterModal} />

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
      </div>
    </div>
  );
};

export default LogInPage;
