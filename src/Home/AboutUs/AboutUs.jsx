import React from "react";
import "./AboutUs.css";
import aboutImage from "../../Assets/About Us/Office setting.jpg"; 

const AboutUs = () => {
  return (
    <div className="about-us container" id="aboutus">
      <div className="about-us-content">
        <h2 className="about-title">WHO WE ARE</h2>
        <p className="about-description">
          We are a bunch of techies passionate about technology and the infinite
          possibilities it creates. At Affordmate, we collaborate with our
          customers to bring their vision to reality. With top-quality IT
          solutions, we are ready to implement innovation for your business.
        </p>
        <a href="#contactus" className="read-more">
          Read More
        </a>
      </div>
      <div className="about-us-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
