import React from "react";
import "./ContactUs.css";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const ContactSection = () => {
  return (
    <section id="ContactUs" className="contact-section">
      <div className="contact-content">
        <h1 className="contact-heading">
          LET'S WORK <br /> TOGETHER
        </h1>
        </div>
      <div className="contact-info">
        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
              PHONE{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">(+91) - 9876543210</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
              SOCIAL LINKS{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">
            <a
              href="https://m.facebook.com"
              className="si"
            >
              <FaFacebook />
            </a>{" "}
            <a href="https://twitter.com/" className="si">
              <BsTwitterX />
            </a>{" "}
            <a href="https://www.instagram.com/" className="si">
              <FaInstagram />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;