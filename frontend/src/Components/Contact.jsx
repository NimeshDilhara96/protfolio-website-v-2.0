import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './style.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-description">
          Interested in collaborating or have a question?<br />
          Let’s connect!
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/nimeshdilhara2001@gmail.com"
          method="POST"
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div className="contact-social">
          <a href="mailto:nimeshdilhara2001@gmail.com" className="social-link" title="Email"><FaEnvelope /></a>
          <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub"><FaGithub /></a>
          <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook"><FaFacebook /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;