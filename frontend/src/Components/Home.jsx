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
      <div className="absolute inset-0 z-[900] pointer-events-none">
        {codeElements.map((code, index) => (
          <span key={index} className={`absolute text-[#39ff14] bg-[rgba(20,20,20,0.85)] rounded px-2 py-0.5 opacity-85 font-mono shadow-[0_0_8px_#39ff1466] border border-[#222] transition-shadow duration-300 animate-[floatCode_7s_cubic-bezier(0.4,0,0.2,1)_infinite] ${
            index % 3 === 0 ? 'after:content-[""] after:inline-block after:w-[0.6em] after:h-[1em] after:bg-[#39ff14] after:ml-[0.1em] after:align-middle after:animate-[blink-cursor_1s_steps(2,start)_infinite] after:rounded-[1px]' : ''
          } ${
            index === 0 ? 'top-[10%] left-[15%] text-[2.2rem] animation-delay-[0s]' :
            index === 1 ? 'top-[20%] left-[70%] text-[1.7rem] animation-delay-[1s]' :
            index === 2 ? 'top-[35%] left-[30%] text-[1.4rem] animation-delay-[2s]' :
            index === 3 ? 'top-[60%] left-[60%] text-[1.6rem] animation-delay-[3s]' :
            index === 4 ? 'top-[80%] left-[20%] text-[1.3rem] animation-delay-[4s]' :
            index === 5 ? 'top-[50%] left-[80%] text-[1.5rem] animation-delay-[5s]' :
            index === 6 ? 'top-[70%] left-[40%] text-[1.8rem] animation-delay-[6s]' :
            index === 7 ? 'top-[15%] left-[50%] text-[1.2rem] animation-delay-[7s]' :
            index === 8 ? 'top-[40%] left-[75%] text-[1.4rem] animation-delay-[2.5s]' :
            index === 9 ? 'top-[65%] left-[10%] text-[1.6rem] animation-delay-[3.5s]' :
            index === 10 ? 'top-[30%] left-[60%] text-[1.3rem] animation-delay-[5.5s]' :
            'top-[75%] left-[55%] text-[1.7rem] animation-delay-[6.5s]'
          }`}>
            {code}
          </span>
        ))}
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-[backgroundMove_20s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-radial-gradient-circle opacity-10"></div>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-center gap-12 max-w-[1200px] mx-auto p-12 w-full md:flex md:flex-col md:gap-8 md:text-center md:items-center md:justify-center md:p-8 sm:p-6 sm:gap-5">
        <div className="min-w-0 md:items-center md:w-full">
          <div className="inline-block py-2 px-4 bg-[rgba(99,102,241,0.1)] text-[var(--primary)] rounded-full text-sm font-semibold mb-4">👋 Hello, I'm</div>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight mb-4 font-[var(--font-secondary)] bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent">Nimesh Dilhara</h1>
          <div className="text-[clamp(1.2rem,3vw,1.5rem)] font-semibold text-[var(--gray)] mb-6">
            <span>{display}</span>
            <span className="inline-block w-[2px] h-[1.2em] bg-[var(--gray)] ml-[2px] align-middle animate-[blink_0.7s_steps(1)_infinite]"></span>
          </div>
          <p className="text-lg text-[var(--gray)] leading-relaxed mb-8 max-w-[600px] md:text-center">
            I craft modern, engaging digital experiences with clean code and creative design.
            Specialized in full-stack web development, AI, and UI/UX.
          </p>
          <div className="flex gap-4 mb-8 flex-wrap md:justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-md font-semibold no-underline transition-all duration-300 relative overflow-hidden border-none cursor-pointer font-inherit text-base bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-md hover:transform hover:translate-y-[-3px] hover:shadow-xl"
              onClick={e => {
                e.preventDefault();
                alert("Download coming soon!");
              }}
            >
              Download Cv
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 py-4 px-8 rounded-md font-semibold no-underline transition-all duration-300 relative overflow-hidden border-none cursor-pointer font-inherit text-base bg-transparent text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:transform hover:translate-y-[-3px]">Contact Me</a>
          </div>
          <div className="flex gap-4 md:justify-center">
            <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:transform hover:translate-y-[-3px]"><FaGithub /></a>
            <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:transform hover:translate-y-[-3px]"><FaLinkedin /></a>
            <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:transform hover:translate-y-[-3px]"><FaInstagram /></a>
            <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:transform hover:translate-y-[-3px]"><FaTwitter /></a>
            <a href="https://facebook.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(99,102,241,0.1)] rounded-md flex items-center justify-center text-[var(--primary)] no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:transform hover:translate-y-[-3px]"><FaFacebook /></a>
          </div>
        </div>
        <div className="flex justify-center items-center flex-shrink-0 md:order-[-1] md:w-full">
          <img src={profilePhoto} alt="Profile Photo" className="w-[500px] h-[500px] object-cover rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_20px_rgba(99,102,241,0.3)] md:w-[260px] md:h-[260px] sm:w-[100px] sm:h-[100px] z-[1000]" />
        </div>
      </div>
    </div>
  );
}

export default Home;