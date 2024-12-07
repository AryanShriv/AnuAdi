import React from "react";
import "./Goals.css";

const OurWish = () => {
  return (
    <div className="our-wish">
      <h2 className="wish-title">OUR WISH</h2>
      <p className="wish-text">
        We are constantly growing a team of Tech-savants, thriving to create an
        impact through powerful and sleek turnkey solutions. We simplify
        complexities in the technology realm, designing, building, and growing
        solutions for enterprise, mobile, analytics, cloud, and security.
      </p>
      <button className="wish-button">
        {" "}
        <a href="#contactus">Get Started</a>
      </button>
    </div>
  );
};

export default OurWish;
