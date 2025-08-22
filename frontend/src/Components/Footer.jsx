import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Nimesh Dilhara. All rights reserved.</p>
    </footer>
  );
}

export default Footer;