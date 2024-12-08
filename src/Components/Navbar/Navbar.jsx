import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false); // State for scroll position

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true); // Add background color after scrolling
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isMobile ? "mobile" : ""} ${
        scrolling ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <h2>AnuAdi</h2>
      </div>

      <ul className={`nav-links ${isMobile ? "active" : ""}`}>
        <li>
          <a href="/#" onClick={() => setIsMobile(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#aboutus" onClick={() => setIsMobile(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#servicesSec" onClick={() => setIsMobile(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#contactus" onClick={() => setIsMobile(false)}>
            Contact
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${isMobile ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
    </nav>
  );
};

export default Navbar;
