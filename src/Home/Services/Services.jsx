// ServicesSection.js

import React from 'react';
import './Services.css';

import Web from "../../Assets/Services/Web Development.png"
import App from "../../Assets/Services/App Development.png"
import Ecom from "../../Assets/Services/Ecomm.png"
import UIUX from "../../Assets/Services/ui-ux.png"


const ServicesSection = () => {
  const services = [
    {
      title: 'Service One',
      description: 'Description for service one goes here.',
      Image: Web,
    },
    {
      title: 'Service Two',
      description: 'Description for service two goes here.',
      Image: App,
    },
    {
      title: 'Service Three',
      description: 'Description for service three goes here.',
      Image: Ecom,
    },{
      title: 'Service Four',
      description: 'Description for service three goes here.',
      Image: UIUX,
    },
  ];

  return (
    <section className="services container">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img className="service-icon" src={service.Image} alt="" srcset="" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
