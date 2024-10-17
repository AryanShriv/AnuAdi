import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services including video messaging, asynchronous communication, and digital sales rooms.",
    },
    {
      question: "How can I sign up?",
      answer: "You can sign up by clicking the 'Sign Up for Free' button on our homepage.",
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, we offer a 14-day free trial for all new users.",
    },
    {
      question: "What support options are available?",
      answer: "We provide email support, live chat, and a comprehensive knowledge base.",
    },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h4>{faq.question}</h4>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
