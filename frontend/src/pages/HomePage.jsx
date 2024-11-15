import React, { useState, useEffect } from "react";
import "../styles/Homepage.css";
import Navbar from "../components/HomePageComponents/Navbar";
import Hero from "../components/HomePageComponents/Hero";
import About from "../components/HomePageComponents/About";
import Footer from "../components/HomePageComponents/Footer";
const HomePage = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
