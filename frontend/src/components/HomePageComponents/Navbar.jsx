// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import grouplogo from "../../assets/HomePageAssets/GroupLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={grouplogo} className="group-logo" alt="Group Logo" />
        </Link>
      </div>
      <div
        className={`navbar__links ${
          isMobileMenuOpen ? "navbar__links--open" : ""
        }`}
      >
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
          About
        </Link>
        <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
          Services
        </Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
          Contact
        </Link>
      </div>
      <button
        className={`navbar__toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
