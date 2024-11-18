import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import grouplogo from "../../assets/HomePageAssets/GroupLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs to track the elements
  const menuRef = useRef(null);

  const [visibility, setVisibility] = useState({
    friends: false,
    messages: false,
    notifications: false,
  });
  const friendsRef = useRef(null);
  const messagesRef = useRef(null);
  const notificationsRef = useRef(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleVisibility = (type) => {
    setVisibility((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  // Close all menus if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menus only if the click is outside their containers and toggle buttons
      if (
        friendsRef.current &&
        !friendsRef.current.contains(event.target) &&
        !event.target.classList.contains("icofont-users-alt-4")
      ) {
        setVisibility((prev) => ({ ...prev, friends: false }));
      }

      if (
        messagesRef.current &&
        !messagesRef.current.contains(event.target) &&
        !event.target.classList.contains("icofont-speech-comments")
      ) {
        setVisibility((prev) => ({ ...prev, messages: false }));
      }

      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target) &&
        !event.target.classList.contains("icofont-notification")
      ) {
        setVisibility((prev) => ({ ...prev, notifications: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar__logo">
        <Link to="/">
          <img src={grouplogo} className="group-logo" alt="Group Logo" />
        </Link>
      </div>

      {/* Notification Sections */}
      <div className="icon-picture-container">
        {/* Friend Requests */}
        <div className="friend-request-container">
          <i
            className="icofont-users-alt-4"
            onClick={() => toggleVisibility("friends")}
          ></i>
          <div className="notification-count"></div>
          <div
            ref={friendsRef}
            className={`friend-request-list ${
              visibility.friends ? "open" : ""
            }`}
          >
            <h2>Friend Requests</h2>
            <p>You have no pending friend requests</p>
          </div>
        </div>

        {/* Message Requests */}
        <div className="message-request-container">
          <i
            className="icofont-speech-comments"
            onClick={() => toggleVisibility("messages")}
          ></i>
          <div className="notification-count"></div>
          <div
            ref={messagesRef}
            className={`message-request-list ${
              visibility.messages ? "open" : ""
            }`}
          >
            <h2>Messages</h2>
            <p>Sorry, no messages were found</p>
          </div>
        </div>

        {/* Notifications */}
        <div className="notification-container">
          <i
            className="icofont-notification"
            onClick={() => toggleVisibility("notifications")}
          ></i>
          <div className="notification-count"></div>

          <div
            ref={notificationsRef}
            className={`notification-list ${
              visibility.notifications ? "open" : ""
            }`}
          >
            <p>Sorry, no notifications were found.</p>
          </div>
        </div>
        {/* Blue line divider  */}
        <div className="blue-line-navbar"></div>
        {/* Profile Picture */}
        <div className="profile-picture-container">
          <img
            src="https://via.placeholder.com/30x30"
            className="profile-picture-navbar"
            alt="Profile Picture"
          />
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div>
        <div
          ref={menuRef}
          className={`navbar__links ${isMobileMenuOpen ? "open" : ""}`}
        >
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            YourYouthBook <span className="link-plus">+</span>
          </Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
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
