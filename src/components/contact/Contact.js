import './Contact.css';
import React from 'react';
import ContactForm from './ContactForm';


import {motion} from "framer-motion";

function Contact() {
  return (
      <motion.section
        className="Contact"
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 25}}
        transition={{duration: .5}}
      >
        <div className="contact-head-container">
          <h2 className="contact-header">Let's Connect</h2>
          <p className="contact-content">
            See something you like? Just want to say hi? Don't hesitate to reach out. I am always open to professional and creative opportunities, and I would love to hear what's on your mind. Let's turn your idea into a reality.
          </p>
          <div className="contact-icon-container">
            <a href="https://github.com/philosophy-flow" target="_blank" rel="noreferrer">
              <i className="fab fa-github-alt fa-2x contact-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/jacob-stewart-587382148/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in fa-2x contact-icon"></i>
            </a>
          </div>
        </div>
        <ContactForm />
      </motion.section>
  );
}

export default Contact;
