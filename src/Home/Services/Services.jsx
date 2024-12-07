import React from "react";
import "./Services.css";
import {
  FaDesktop,
  FaMobileAlt,
  FaCode,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaDesktop />,
    title: "Web Designing",
    description:
      "Our team of proficient web developers uses the latest technologies to provide responsive web designs for both small and large enterprises.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "We deliver nothing but the best mobile applications, creating seamless experiences across all devices.",
  },
  {
    icon: <FaCode />,
    title: "Web Application",
    description:
      "We create robust, scalable web applications that align with your business objectives and maximize resource utilization.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "We deliver quality e-commerce solutions to magnify customer bases and profitability for your organization.",
  },
  {
    icon: <FaSearch />,
    title: "SEO",
    description:
      "We help you rank at the top of search results and grow your organic audience using proven SEO strategies.",
  },
];

const Services = () => {
  return (
    <div className="services" id="servicesSec">
      <div className="container">
        <h2 className="services-title">SERVICES WE DELIVER</h2>
        <h2 className="services-title">
          WE PROVIDE{" "}
          <span className="highlight">TRULY PROMINENT IT SOLUTIONS.</span>
        </h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
