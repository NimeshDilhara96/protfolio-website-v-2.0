import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './floatingCode.css'; // Still need this for the floating code animation
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
    <div className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden pt-20 box-border bg-[var(--light)]">
      <div className="coding-bg">
        {codeElements.map((code, index) => (
          <span key={index} className="code-float">
            {code}
          </span>
        ))}
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-[backgroundMove_20s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-center gap-12 max-w-[1200px] mx-auto p-12 w-full">
        <div className="min-w-0">
          <div className="inline-block py-2 px-4 bg-opacity-10 bg-[#6366f1] text-[#6366f1] rounded-full text-sm font-semibold mb-4">
            👋 Hello, I'm
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight mb-4 font-[var(--font-secondary)] bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            Nimesh Dilhara
          </h1>
          <div className="text-[clamp(1.2rem,3vw,1.5rem)] font-semibold text-[var(--gray)] mb-6">
            <span>{display}</span>
            <span className="inline-block w-[2px] h-[1.2em] bg-[var(--gray)] ml-[2px] align-middle animate-[blink_0.7s_steps(1)_infinite]"></span>
          </div>
          <p className="text-lg text-[var(--gray)] leading-7 mb-8 max-w-[600px]">
            I craft modern, engaging digital experiences with clean code and creative design.
            Specialized in full-stack web development, AI, and UI/UX.
          </p>
          <div className="flex gap-4 mb-8 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-md font-semibold no-underline transition-all duration-300 relative overflow-hidden border-none cursor-pointer font-inherit text-base bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-md hover:translate-y-[-3px] hover:shadow-xl"
              onClick={e => {
                e.preventDefault();
                alert("Download coming soon!");
              }}
            >
              Download Cv
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 py-4 px-8 rounded-md font-semibold no-underline transition-all duration-300 relative overflow-hidden bg-transparent text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-3px]"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-3px]">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-3px]">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-3px]">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-3px]">
              <FaTwitter />
            </a>
            <a href="https://facebook.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-3px]">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center flex-shrink-0">
          <img 
            src={profilePhoto} 
            alt="Profile Photo" 
            className="w-[500px] h-[500px] object-cover rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_20px_rgba(99,102,241,0.3)] z-[1000]" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;