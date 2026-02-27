import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import profilePhoto from '../assets/profiletrc.webp';

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

// Reusable Badge Component
const WelcomeBadge = () => (
  <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6 rounded-full bg-[#34B27B]/20 text-[#34B27B] border border-[#34B27B]/30 text-sm font-medium backdrop-blur-sm">
    👋 Hello, I'm
  </div>
);

// Open to Work Badge Component
const OpenToWorkBadge = () => (
  <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6 rounded-full bg-green-500/10 text-green-600 border border-green-500/30 text-sm font-medium backdrop-blur-sm animate-pulse ml-2">
    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
    Open to Work
  </div>
);

// Social Links Component
const SocialLinks = ({ size = 'default' }) => {
  const iconSize = size === 'large' ? 20 : 16;
  const containerSize = size === 'large' ? 'w-12 h-12' : 'w-9 h-9';
  
  const socialLinks = [
    { href: "https://github.com/nimeshdilhara96", icon: FaGithub, label: "GitHub Profile" },
    { href: "https://linkedin.com/in/nimeshdilhara", icon: FaLinkedin, label: "LinkedIn Profile" },
    { href: "https://instagram.com/nimeshdilhara96", icon: FaInstagram, label: "Instagram Profile" },
    { href: "https://twitter.com/nimeshdilhara8", icon: FaTwitter, label: "Twitter Profile" }, // Fix your username
    { href: "https://facebook.com/nimesh.dilhara.96", icon: FaFacebook, label: "Facebook Profile" }
  ];

  return (
    <div className={`flex items-center ${size === 'large' ? 'gap-4' : 'gap-3'}`}>
      {socialLinks.map(({ href, icon, label }) => (
        <a 
          key={label}
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={label}
          className={`${containerSize} flex items-center justify-center rounded-full bg-[#11181C] text-[#F8F9FA]/70 hover:bg-[#34B27B] hover:text-white transition-all duration-300 backdrop-blur-sm ${size === 'large' ? 'hover:scale-110' : ''}`}
        >
          {React.createElement(icon, { size: iconSize })}
        </a>
      ))}
    </div>
  );
};

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

  // Fixed CV link - use the same one for both mobile and desktop
  const CV_LINK = "https://drive.google.com/file/d/1vv68wCDcY4ggOY3uy3AnyURXQtdYofW4/view?usp=drive_link";

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#11181C] via-[#11181C] to-black pt-20 md:pt-16">
      {/* Modern Professional Background - Dark Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Rich dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#11181C] via-[#11181C] to-black"></div>
        
        {/* Animated gradient orbs - Supabase Jungle Green theme */}
        <div className="absolute top-[-20%] sm:top-[-10%] left-[-10%] sm:left-[-5%] w-[300px] sm:w-[450px] md:w-[500px] h-[300px] sm:h-[450px] md:h-[500px] rounded-full bg-[#34B27B]/10 blur-3xl animate-blob"></div>
        <div className="absolute top-[5%] sm:top-[10%] right-[-10%] sm:right-[-5%] w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full bg-[#34B27B]/15 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-15%] sm:bottom-[-10%] left-[10%] sm:left-[20%] w-[280px] sm:w-[400px] md:w-[450px] h-[280px] sm:h-[400px] md:h-[450px] rounded-full bg-[#34B27B]/10 blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Additional color accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full bg-[#34B27B]/10 blur-3xl animate-blob animation-delay-6000"></div>
        
        {/* Subtle geometric pattern */}
        <div className="hidden sm:block absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #34B27B 1px, transparent 1px),
            linear-gradient(to bottom, #34B27B 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Modern dots pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #34B27B 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#11181C]/20 to-transparent"></div>
        
        {/* Smooth fade to content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#11181C]/80 z-10"></div>
        
        {/* Glass morphism accent with color */}
        <div className="hidden lg:block absolute top-1/3 right-1/3 w-96 h-96 bg-[#34B27B]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Optimized CSS Keyframes - Smoother on mobile */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.08);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        
        .animate-blob {
          animation: blob 25s ease-in-out infinite;
          will-change: transform;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob {
            animation: none;
          }
        }
      `}</style>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-20 py-8 md:py-16">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center text-center lg:hidden">
          {/* Profile Image - Mobile */}
          <div className="mb-8">
            <div className="relative inline-block group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 relative">
                {/* Main border with gradient - Ring with opening at top-right */}
                <div className="absolute -inset-1 bg-[#34B27B] rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300" style={{clipPath: 'polygon(50% 50%, 50% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 100%, 0% 100%, 0% 0%, 50% 0%, 50% 50%, 100% 15%, 100% 100%, 0% 100%, 0% 0%)'}}></div>
                
                {/* Ring segments for better gap control */}
                <svg className="absolute -inset-1 w-[calc(100%+0.5rem)] h-[calc(100%+0.5rem)]" style={{transform: 'rotate(-90deg)'}}>
                  <circle 
                    cx="50%" 
                    cy="50%" 
                    r="48%" 
                    fill="none" 
                    stroke="#34B27B" 
                    strokeWidth="4" 
                    strokeDasharray="220 40" 
                    strokeDashoffset="-30"
                    className="opacity-50 group-hover:opacity-100 transition-all duration-300"
                    style={{strokeLinecap: 'round'}}
                  />
                </svg>
                
                {/* Inner border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#11181C] to-black rounded-full"></div>
                
                {/* Image */}
                <img 
                  src={profilePhoto} 
                  alt="Nimesh Dilhara - Software Engineer and Full Stack Developer" 
                  className="w-full h-full object-cover rounded-full p-1 relative z-10 transform group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-[#34B27B]/10"
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{transform: 'rotate(45deg)'}}></div>
                
                {/* Open to Work Badge on Ring - LinkedIn Style */}
                <div className="absolute bottom-1 right-1 z-20">
                  <div className="relative">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-500 text-white border-2 border-white text-[10px] font-bold shadow-lg">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
                      Open to Work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Mobile */}
          <div className="max-w-lg">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <WelcomeBadge />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#F8F9FA] tracking-tight">
              Nimesh Dilhara
            </h1>
            
            {/* Fixed typing animation height */}
            <div className="text-lg sm:text-xl font-medium mb-4 text-[#34B27B] min-h-[28px] flex items-center justify-center">
              <span>{display}</span>
              <span className="w-[2px] h-5 bg-[#34B27B] ml-1 animate-pulse" aria-hidden="true"></span>
            </div>
            
            <p className="text-[#F8F9FA]/70 text-base sm:text-lg mb-6 leading-relaxed">
              I craft modern, engaging digital experiences with clean code and creative design.
              Specialized in full-stack web development, AI, and UI/UX.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <a
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download my CV"
                className="w-full sm:w-auto px-6 py-3 bg-[#34B27B] text-white text-sm rounded-xl font-medium shadow-lg shadow-[#34B27B]/20 hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
              <a 
                href="#contact"
                aria-label="Go to contact section"
                className="w-full sm:w-auto px-6 py-3 border-2 border-[#34B27B] text-[#34B27B] text-sm rounded-xl font-medium hover:bg-[#34B27B] hover:text-white hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-[#34B27B] group-hover:w-full transition-all duration-300 rounded-xl"></span>
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
            
            <SocialLinks />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Desktop */}
          <div className="flex-1 text-left max-w-2xl">
            <div className="flex items-center gap-2">
              <WelcomeBadge />
            </div>
            
            <h1 className="text-5xl xl:text-6xl font-bold mb-4 text-[#F8F9FA] tracking-tight">
              Nimesh Dilhara
            </h1>
            
            {/* Fixed typing animation height */}
            <div className="text-2xl xl:text-3xl font-medium mb-6 text-[#34B27B] min-h-[40px] xl:min-h-[48px] flex items-center">
              <span>{display}</span>
              <span className="w-[3px] h-7 bg-[#34B27B] ml-1 animate-pulse" aria-hidden="true"></span>
            </div>
            
            <p className="text-[#F8F9FA]/70 text-xl mb-8 max-w-xl leading-relaxed">
              I craft modern, engaging digital experiences with clean code and creative design.
              Specialized in full-stack web development, AI, and UI/UX.
            </p>
            
            <div className="flex items-center gap-5 mb-10">
              <a
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download my CV"
                className="px-8 py-4 bg-[#34B27B] text-white text-base rounded-xl font-medium shadow-lg shadow-[#34B27B]/20 hover:translate-y-[-3px] hover:shadow-xl hover:bg-[#34B27B]/90 transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
              >
                <span className="relative z-10">Download CV</span>
                <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
              <a 
                href="#contact"
                aria-label="Go to contact section"
                className="px-8 py-4 border-2 border-[#34B27B] text-[#34B27B] text-base rounded-xl font-medium hover:bg-[#34B27B] hover:text-white hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-[#34B27B] group-hover:w-full transition-all duration-300 rounded-xl"></span>
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
            
            <SocialLinks size="large" />
          </div>

          {/* Profile Image - Desktop */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-80 h-80 xl:w-96 xl:h-96 relative">
                {/* Main border with gradient */}
                <div className="absolute -inset-1.5 bg-[#34B27B] rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Inner border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#11181C] to-black rounded-full"></div>
                
                {/* Image */}
                <img 
                  src={profilePhoto} 
                  alt="Nimesh Dilhara - Software Engineer and Full Stack Developer" 
                  className="w-full h-full object-cover rounded-full p-2 relative z-10 transform group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-[#34B27B]/10"
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{transform: 'rotate(45deg)'}}></div>
                
                {/* Open to Work Badge on Ring */}
                <div className="absolute bottom-2 right-2 z-20">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/95 text-white border-2 border-white text-sm font-bold backdrop-blur-sm animate-pulse shadow-xl">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Open to Work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;