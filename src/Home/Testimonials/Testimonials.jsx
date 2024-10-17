import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Logo from "../../Assets/Logo/Logo.png"

import './Testimonials.css';

// import required modules
import { Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service was fantastic! Highly recommend it to everyone.",
    image: Logo, // Replace with actual image paths
  },
  {
    name: "Jane Smith",
    feedback: "A wonderful experience, very professional!",
    image: Logo, // Replace with actual image paths
  },
  {
    name: "Alice Johnson",
    feedback: "Top-notch quality and service!",
    image: Logo, // Replace with actual image paths
  },
  // Add more testimonials as needed
];

export default function TestimonialSection() {
  return (
    <div className="testimonial-section container">
      <h2>What Our Clients Say</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-feedback">{testimonial.feedback}</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
