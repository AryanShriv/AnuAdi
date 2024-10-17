import React from 'react';
import './Footer.css';
import { FaGlobeAmericas } from "react-icons/fa";

import Globe from "../../Assets/Footer/Globe.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Phone</h3>
          <p>(+91) - 9876543210</p>
        </div>
        <div className="footer-section post">
          <h3>Mail</h3>
          <p>loremipsum@dolor.com</p>
        </div>
        <div className="footer-section address">
          <h3>Address</h3>
          <p>Almaty city, Shevchenko st. 90</p>
        </div>
        <div className="footer-section request">
          <h3>Leave a request</h3>
          <button className="request-button">Leave a request</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p> <FaGlobeAmericas className='Globe' />
          We work throughout World ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
