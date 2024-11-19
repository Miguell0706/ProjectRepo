import React from "react";
import heroImage from "../../assets/HomePageAssets/HeroImage.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Welcome to YourYouthBook</h1>
        <p>The ultimate gift for your child</p>
        <button className="hero__button">
          Discover now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            className="hero__arrow"
          >
            <path d="M16.671,9.998 L12.997,9.998 L16.462,6.000 L5.000,6.000 L5.000,4.000 L16.462,4.000 L12.997,0.002 L16.671,0.002 L21.003,5.000 L16.671,9.998 ZM17.000,5.379 L17.328,5.000 L17.000,4.621 L17.000,5.379 ZM-0.000,4.000 L3.000,4.000 L3.000,6.000 L-0.000,6.000 L-0.000,4.000 Z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
