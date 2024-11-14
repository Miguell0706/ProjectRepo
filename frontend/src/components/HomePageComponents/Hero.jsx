import React from "react";
import heroImage from "../../assets/HomePageAssets/HeroImage.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Welcome to Our Website</h1>
        <p>
          Your journey starts here. Explore our services and discover what we
          can offer you.
        </p>
        <button className="hero__button">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
