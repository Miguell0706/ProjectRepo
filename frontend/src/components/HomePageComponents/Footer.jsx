import React from "react";
import SingleLogo from "../../assets/HomePageAssets/SingleLogo.png";
import SingleLogo2 from "../../assets/HomePageAssets/SingleLogo2.png";
import SingleLogo3 from "../../assets/HomePageAssets/SingleLogo3.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-image-container">
        <img src={SingleLogo} alt="Single Logo" />
        <img src={SingleLogo2} alt="Single Logo2" />
        <img src={SingleLogo3} alt="Single Logo3" />
        <img src={SingleLogo} alt="Single Logo" />
        <img src={SingleLogo2} alt="Single Logo2" />
        <img src={SingleLogo3} alt="Single Logo3" />
        <img src={SingleLogo} alt="Single Logo" />
      </div>
      <div className="footer-text-container"></div>
    </section>
  );
};

export default Footer;
