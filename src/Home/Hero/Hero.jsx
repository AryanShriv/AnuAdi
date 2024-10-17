// HeroSection.jsx
import React from 'react';
import './Hero.css';

import Logo from "../../Assets/Logo/Logo.png"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>Transforming IT for Your Future</h1>
          <p>Innovative solutions tailored for your business growth and success.</p>
          <button className="hero-btn">Explore Solutions</button>
        </div>
        <div className="hero-image">
          <img src={Logo} alt="Tech Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
