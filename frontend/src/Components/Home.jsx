import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './style.css'; // Assuming you have a CSS file for styling
import './floatingCode.css'; // Add this line at the top with your other imports
import profilePhoto from '../assets/profile.jpg'; // Ensure the path is correct

const lines = [
  "Undergraduate Software Engineer",
  "Creative Developer & Problem Solver",
  "Frontend Developer 💻",
  "Backend Developer 🔧",
  "Full Stack Developer 🚀",
  "From Beautiful Sri Lanka 🇱🇰",
  "Always Learning & Creating ✨",
  "MommentX"
];

// Code elements for floating animation
const codeElements = [
  '{}', '</>', '()', ';', 'if', 'const', 'function', '==', 'let', 'return', 'switch', 'MommentX'
];

function Home() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [display, setDisplay] = useState('');
  const typingTimeout = useRef();

  useEffect(() => {
    const currentLine = lines[lineIdx];
    if (!isDeleting) {
      if (charIdx < currentLine.length) {
        typingTimeout.current = setTimeout(() => setCharIdx(charIdx + 1), 60);
      } else {
        typingTimeout.current = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      if (charIdx > 0) {
        typingTimeout.current = setTimeout(() => setCharIdx(charIdx - 1), 30);
      } else {
        setIsDeleting(false);
        setLineIdx((lineIdx + 1) % lines.length);
        typingTimeout.current = setTimeout(() => {}, 500);
      }
    }
    setDisplay(currentLine.slice(0, charIdx));
    return () => clearTimeout(typingTimeout.current);
  }, [charIdx, isDeleting, lineIdx]);

  return (
    <div className="hero">
      <div className="coding-bg">
        {codeElements.map((code, index) => (
          <span key={index} className="code-float">
            {code}
          </span>
        ))}
      </div>
      <div className="hero-bg">
        <div className="animated-bg"></div>
        <div className="gradient-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">👋 Hello, I'm</div>
          <h1 className="hero-title">Nimesh Dilhara</h1>
          <div className="hero-subtitle">
            <span>{display}</span>
            <span className="typing-cursor"></span>
          </div>
          <p className="hero-description">
            I craft modern, engaging digital experiences with clean code and creative design.
            Specialized in full-stack web development, AI, and UI/UX.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Download My Cv</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
            <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
            <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
            <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /></a>
            <a href="https://facebook.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={profilePhoto} alt="Profile Photo" className="profile-photo" />
        </div>
      </div>
    </div>
  );
}

export default Home;