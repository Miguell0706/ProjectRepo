import React, { useState, useEffect } from "react";
import "../styles/Homepage.css";
import Navbar from "../components/HomePageComponents/Navbar";
import Hero from "../components/HomePageComponents/Hero";
const HomePage = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
