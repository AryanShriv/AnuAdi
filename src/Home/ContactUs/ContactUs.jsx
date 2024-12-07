import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa"; // Importing React Icons
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us" id="contactus">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Need a hand?</h2>
            <p>
              We’re here to help you with your IT needs. Reach out to our team
              today.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaPhoneAlt size={24} color="#4fa3f7" />
                <div>
                  <h4>Call us</h4>
                  <p>+91 871 456 08 28</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope size={24} color="#4fa3f7" />
                <div>
                  <h4>Email us</h4>
                  <p>info@affordmate.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaClock size={24} color="#4fa3f7" />
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Fri: 9 AM - 5 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a message</h3>
            <form>
              <div className="form-field">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-field">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-field">
                <select required>
                  <option value="">Select Service</option>
                  <option value="web-design">Web Design</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="seo">SEO Services</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>
              <div className="form-field">
                <textarea
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
