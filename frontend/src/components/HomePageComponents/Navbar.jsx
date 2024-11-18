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
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleFriendsNotifs = () => {
    setIsFriendsVisible((prev) => !prev);
    friendsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMessageNotifs = () => {
    setIsMessagesVisible((prev) => !prev);
    messagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleNotificationsNotifs = () => {
    setIsNotificationsVisible((prev) => !prev);
    notificationsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Close all menus if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
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
          <i className="icofont-users-alt-4" onClick={toggleFriendsNotifs}></i>
          <div className="notification-count"></div>
          {isFriendsVisible && (
            <div ref={friendsRef} className="friend-request-list show">
              <h2>Friend Requests</h2>
              <p>You have no pending friend requests</p>
            </div>
          )}
        </div>

        {/* Message Requests */}
        <div className="message-request-container">
          <i
            className="icofont-speech-comments"
            onClick={toggleMessageNotifs}
          ></i>
          <div className="notification-count"></div>
          {isMessagesVisible && (
            <div ref={messagesRef} className="message-request-list show">
              <h2>Messages</h2>
              <p>Sorry, no messages were found</p>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="notification-container">
          <i
            className="icofont-notification"
            onClick={toggleNotificationsNotifs}
          ></i>
          <div className="notification-count"></div>
          {isNotificationsVisible && (
            <div ref={notificationsRef} className="notification-list show">
              <p>Sorry, no notifications were found.</p>
            </div>
          )}
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
