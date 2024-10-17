// AboutUsSection.jsx
import React from 'react';
import './AboutUs.css';
import aboutImage from '../../Assets/Logo/Logo.png'; // Replace with your actual image path

const AboutUsSection = () => {
  return (
    <section className="about-us container">
      <div className="about-content">
        <h2>About Us</h2>
        <h3>
          Helping businesses deliver <span className="highlight">exceptional buyer experiences.</span>
        </h3>
        <p>
          Vidyard is the leading video messaging and asynchronous communications platform for go-to-market teams. Millions of sales professionals and more than 250,000 go-to-market teams use Vidyard’s AI-powered video messaging, video hosting, and digital sales rooms to connect with more prospects and generate more revenue.
        </p>
        <button className="cta-button">Sign Up for Free</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </section>
  );
};

export default AboutUsSection;
