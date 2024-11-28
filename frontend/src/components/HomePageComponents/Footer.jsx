import React from "react";
import SingleLogo from "../../assets/HomePageAssets/SingleLogo.png";
import SingleLogo2 from "../../assets/HomePageAssets/SingleLogo2.png";
import SingleLogo3 from "../../assets/HomePageAssets/SingleLogo3.png";
import GroupLogo from "../../assets/HomePageAssets/GroupLogo.png";
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
      <div className="footer-info-container">
        <div className="footer-image-container">
          <img src={GroupLogo} alt="Single Logo" />

          <p></p>
        </div>
        <div className="important-links">
          <h3>Important links</h3>
          <p>About us</p>
          <p>Why YYB?</p>
          <p>Contact</p>
          <p>How does it work</p>
        </div>
        <div className="Follow-us-on">
          <h3>Follow us on</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="Youryouthbook">
          <h3>Youryouthbook</h3>
          <p>Privacy policy</p>
          <p>Disclaimer</p>
          <p>Terms and Conditions</p>
          <p>Questions</p>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright © YourYoutuhbook.com</p>
        <div className="copyright-arrow-container">
          <i className="icofont-bubble-up"></i>
        </div>
      </div>
    </section>
  );
};

export default Footer;
