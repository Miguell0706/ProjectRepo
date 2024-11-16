import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import grouplogo from "../../assets/HomePageAssets/GroupLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFriendsVisible, setIsFriendsVisible] = useState(false);
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

  // Refs to track the elements
  const menuRef = useRef(null);
  const friendsRef = useRef(null);
  const messagesRef = useRef(null);
  const notificationsRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFriendsNotifs = () => {
    setIsFriendsVisible((prev) => !prev);
  };

  const toggleMessageNotifs = () => {
    setIsMessagesVisible((prev) => !prev);
  };

  const toggleNotificationsNotifs = () => {
    setIsNotificationsVisible((prev) => !prev);
  };

  // Close all menus if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      setIsMobileMenuOpen(false);
      setIsFriendsVisible(false);
      setIsMessagesVisible(false);
      setIsNotificationsVisible(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      {/* Logo Section */}
      <div className="navbar__logo">
        <Link to="/">
          <img src={grouplogo} className="group-logo" alt="Group Logo" />
        </Link>
      </div>

      {/* Notification Sections */}
      <div className="icon-picture-container">
        {/* Friend Requests */}
        <div className="friend-request-container" ref={friendsRef}>
          <i className="icofont-users-alt-4" onClick={toggleFriendsNotifs}></i>
          <div className="notification-count"></div>
          {isFriendsVisible && (
            <div className="friend-request-list">
              <h2>Friend Requests</h2>
              <p>You have no pending friend requests</p>
            </div>
          )}
        </div>

        {/* Message Requests */}
        <div className="message-request-container" ref={messagesRef}>
          <i
            className="icofont-speech-comments"
            onClick={toggleMessageNotifs}
          ></i>
          <div className="notification-count"></div>
          {isMessagesVisible && (
            <div className="message-request-list">
              <h2>Message Requests</h2>
              <p>You have no pending messages</p>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="notification-container" ref={notificationsRef}>
          <i
            className="icofont-notification"
            onClick={toggleNotificationsNotifs}
          ></i>
          <div className="notification-count"></div>
          {isNotificationsVisible && (
            <div className="notification-list">
              <p>Sorry, no notifications were found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div>
        <div
          className={`navbar__links ${
            isMobileMenuOpen ? "navbar__links--open" : ""
          }`}
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
