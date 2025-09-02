import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-modern-container">
        <div className="footer-brand">
          <span className="footer-logo">Nimesh Dilhara</span>
          <span className="footer-year">© {new Date().getFullYear()}</span>
        </div>
        <div className="footer-powered">
          <a
            href="https://mommentx.com"
            className="footer-powered-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-powered-label">Powered by</span>
            <span className="footer-powered-brand">MommentX</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;