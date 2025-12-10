import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import profilePhoto from '../assets/profile.jpg';

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
  { content: "function optimizeCode() { /* logic */ }", color: "var(--primary)" },
  { content: "const createUI = () => <Component />", color: "var(--accent)" },
  { content: ".container { display: flex; }", color: "var(--primary-dark)" },
  { content: "async function fetchData() { }", color: "var(--accent-pink)" },
  { content: "import React from 'react';", color: "var(--primary)" },
  { content: "const [state, setState] = useState();", color: "var(--primary-light)" },
  { content: "class Algorithm { constructor() { } }", color: "var(--primary)" },
  { content: "SELECT * FROM projects WHERE status='completed'", color: "var(--accent)" },
  { content: "npm install --save dependencies", color: "var(--primary-dark)" },
  { content: "git commit -m 'Fixed bugs'", color: "var(--accent-pink)" },
  { content: "<div className='container'></div>", color: "var(--primary)" },
  { content: "document.addEventListener('DOMContentLoaded', ()=> {})", color: "var(--primary-light)" },
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
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--light)] to-[var(--light-dark)] pt-20 md:pt-16">
      {/* Enhanced Background with Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--light)] via-[var(--light-dark)] to-[var(--dark-light)] opacity-80"></div>
        
        {/* Animated Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBoMTAwdjEwMEgxMDBWMFptMCAxMDBIMHYxMDBoMTAwVjEwMFoiIGZpbGw9IiMxYTFiMWUiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] animate-[gradient_15s_ease_infinite] opacity-20"></div>
        
        {/* Circular Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-transparent blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[var(--accent-pink)]/15 to-transparent blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[30%] right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-bl from-[var(--accent)]/10 to-transparent blur-[70px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--light)]/30 to-[var(--light)] z-10"></div>
        
        {/* Added Floating Code Animation */}
        <div className="absolute inset-0 pointer-events-none z-5">
          {codeElements.map((code, index) => (
            <div
              key={index}
              className="absolute opacity-20 text-[12px] font-mono whitespace-nowrap"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: code.color,
                transform: `scale(${0.8 + Math.random() * 0.5})`,
                animation: `float ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                textShadow: `0 0 5px ${code.color}`
              }}
            >
              {code.content}
            </div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-20 py-8 md:py-16">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center text-center lg:hidden">
          {/* Profile Image - Mobile */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] rounded-full blur-sm opacity-75 animate-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover rounded-full border-3 border-white/60 shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Mobile */}
          <div className="max-w-lg">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] border border-[var(--primary-light)]/20 text-sm font-medium backdrop-blur-sm">
              👋 Hello, I'm
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[var(--dark)] tracking-tight">
              Nimesh Dilhara
            </h1>
            
            {/* Animated subtitle */}
            <div className="text-lg sm:text-xl font-medium mb-4 text-[var(--primary)] h-7 flex items-center justify-center">
              <span>{display}</span>
              <span className="w-[2px] h-5 bg-[var(--primary)] ml-1 animate-pulse"></span>
            </div>
            
            {/* Description */}
            <p className="text-[var(--gray)] text-base sm:text-lg mb-6 leading-relaxed">
              I craft modern, engaging digital experiences with clean code and creative design.
              Specialized in full-stack web development, AI, and UI/UX.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <a
                href="https://drive.google.com/file/d/1vv68wCDcY4ggOY3uy3AnyURXQtdYofW4/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-sm rounded-xl font-medium shadow-lg shadow-[var(--primary)]/20 hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] text-sm rounded-xl font-medium hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-[var(--primary)] group-hover:w-full transition-all duration-300 rounded-xl"></span>
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex items-center justify-center gap-3">
              <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm">
                <FaGithub size={16} />
              </a>
              <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm">
                <FaLinkedin size={16} />
              </a>
              <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm">
                <FaInstagram size={16} />
              </a>
              <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm">
                <FaTwitter size={16} />
              </a>
              <a href="https://facebook.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm">
                <FaFacebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Desktop */}
          <div className="flex-1 text-left max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-[var(--primary-light)]/10 text-[var(--primary)] border border-[var(--primary-light)]/20 text-sm font-medium backdrop-blur-sm">
              👋 Hello, I'm
            </div>
            
            {/* Title */}
            <h1 className="text-5xl xl:text-6xl font-bold mb-4 text-[var(--dark)] tracking-tight">
              Nimesh Dilhara
            </h1>
            
            {/* Animated subtitle */}
            <div className="text-2xl xl:text-3xl font-medium mb-6 text-[var(--primary)] h-10 flex items-center">
              <span>{display}</span>
              <span className="w-[3px] h-7 bg-[var(--primary)] ml-1 animate-pulse"></span>
            </div>
            
            {/* Description */}
            <p className="text-[var(--gray)] text-xl mb-8 max-w-xl leading-relaxed">
              I craft modern, engaging digital experiences with clean code and creative design.
              Specialized in full-stack web development, AI, and UI/UX.
            </p>
            
            {/* Action buttons - FIXED */}
            <div className="flex items-center gap-5 mb-10">
              <a
                href="https://drive.google.com/file/d/1_PNVLvQloSZATRJZa7xJU4QvxWEgLZwE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-base rounded-xl font-medium shadow-lg shadow-[var(--primary)]/20 hover:translate-y-[-3px] hover:shadow-xl transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="relative z-10">Download CV</span>
                <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] text-base rounded-xl font-medium hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-[var(--primary)] group-hover:w-full transition-all duration-300 rounded-xl"></span>
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm hover:scale-110">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com/nimeshdilhara.96" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--dark-light)]/10 text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 backdrop-blur-sm hover:scale-110">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image - Desktop */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 xl:w-96 xl:h-96 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--accent-pink)] rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] rounded-full blur-md opacity-80"></div>
                <img 
                  src={profilePhoto} 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover rounded-full border-4 border-white/70 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;