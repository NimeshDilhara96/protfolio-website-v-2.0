import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './style.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <p>Feel free to reach out for collaborations, project inquiries, or just to say hello 👋</p>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required className="form-input" />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required className="form-textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div className="social-links">
          <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
          <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
          <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
          <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /></a>
          <a href="https://facebook.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;