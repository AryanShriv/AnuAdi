import React from 'react'

import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import Goal from './Goal/Goal'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'
import ContactUs from './ContactUs/ContactUs'
import Faq from './FAQ/Faq'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Goal/>
      <AboutUs/>
      <Services/>
      <Testimonials/>
      <Faq/>
      <ContactUs/>
    </div>
  )
}

export default Home