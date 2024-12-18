import React, { useState, useEffect } from "react";
import "../styles/Homepage.css";
import Navbar from "../components/HomePageComponents/Navbar";
import Hero from "../components/HomePageComponents/Hero";
import About from "../components/HomePageComponents/About";
import Footer from "../components/HomePageComponents/Footer";
import axios from "axios";

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return; // No token, skip fetching

      try {
        const response = await axios.get("/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data); // Store user data
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err.message);
        setError("Failed to load user information. Please log in again.");
        localStorage.removeItem("authToken"); // Remove invalid token
      }
    };
    fetchUserData();
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="Home-container">
      <Navbar user={user} setUser={setUser} />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
