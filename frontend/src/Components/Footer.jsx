import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="site-footer enhanced-footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Nimesh Dilhara. All Rights Reserved.
        </p>
        <a
          href="https://nimeshdilhara96.github.io"
          className="powered-by"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="powered-by-label">Powered by</span>
          <span className="powered-by-brand">MommentX</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;