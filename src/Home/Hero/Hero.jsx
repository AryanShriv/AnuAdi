import React from "react";
import "./Hero.css";

import BG from "../../Assets/Hero/BG.mp4"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-video">
        <video
          className="background-video"
          src={BG}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="overlay"></div>
      <div className="hero-content">
        <h4>We are the technocrats</h4>
        <h1>We create the Digital Presence of the businesses</h1>
        
      </div>
    </section>
  );
};

export default HeroSection;
