import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import grouplogo from "../../assets/HomePageAssets/GroupLogo.png";
import profilepicture from "../../assets/HomePageAssets/profilepicture.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isYouthBookOpen, setIsYouthBookOpen] = useState(false);

  // Refs to track the elements
  const menuRef = useRef(null);

  const [visibility, setVisibility] = useState({
    friends: false,
    messages: false,
    notifications: false,
    profileMenu: false,
  });
  const friendsRef = useRef(null);
  const messagesRef = useRef(null);
  const notificationsRef = useRef(null);
  const profileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleYouthBook = () => {
    setIsYouthBookOpen(!isYouthBookOpen);
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

      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target) &&
        !event.target.classList.contains("profile-picture-navbar")
      ) {
        setVisibility((prev) => ({ ...prev, profileMenu: false }));
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
      {/* Navlinks wide screen */}
      <div>
        <ul className="navbar__links__wide">
          <li>
            <Link>Home</Link>
          </li>
          <li className="youthbook-link-wide">
            <Link>YouthBook</Link>
            <div className="youthbook-dropdown-wide">
              <Link onClick={() => setIsMobileMenuOpen(false)}>Pregnancy</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Announce Pregnancy
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Gender reveal
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Birth announcement
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Maternity care
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>Birthdays</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Family Tree
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>Scribbles</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Photo/Audio/Video
              </Link>
              <Link to="/Growth" onClick={() => setIsMobileMenuOpen(false)}>
                Growth Ladder
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Video messages
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                School report
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>Diplomas</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                School teachers
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Friends book
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Tooth Fairy
              </Link>
            </div>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
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
            src={profilepicture}
            className="profile-picture-navbar"
            onClick={() => toggleVisibility("profileMenu")}
          />
          <h2>Sample Name</h2>
          <div
            ref={profileMenuRef}
            className={`profile-menu ${visibility.profileMenu ? "open" : ""}`}
          >
            <ul className="profile-menu-content">
              <li>
                <Link>
                  <i className="icofont-user-suited"></i>
                  <p>Profile</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="icofont-gear"></i>
                  <p>Settings</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="icofont-users-alt-2"></i>
                  <p>Groups</p>
                </Link>
              </li>
              <li>
                <Link to="/Login">
                  <i className="icofont-power"></i>
                  <p>Logout</p>
                </Link>
              </li>
            </ul>
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
            <Link onClick={toggleYouthBook}>
              YourYouthBook <span className="link-plus">+</span>
            </Link>
            <div
              className={`youthbook-dropdown ${isYouthBookOpen ? "open" : ""}`}
            >
              <Link onClick={() => setIsMobileMenuOpen(false)}>Pregnancy</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Announce Pregnancy
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Gender reveal
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Birth announcement
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Maternity care
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>Birthdays</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Family Tree
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>Scribbles</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Photo/Audio/Video
              </Link>
              <Link to="/Growth" onClick={() => setIsMobileMenuOpen(false)}>
                Growth Ladder
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Video messages
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                School report
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>Diplomas</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                School teachers
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Friends book
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)}>
                Tooth Fairy
              </Link>
            </div>
            <Link onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
