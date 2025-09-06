import React, { useEffect, useRef, useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaBriefcase, FaEnvelope, FaDownload } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: "/#home", label: "Home", icon: <FaHome /> },
  { href: "/#about", label: "About", icon: <FaUser /> },
  { href: "/#education", label: "Education", icon: <FaGraduationCap /> },
  { href: "/#technologies", label: "Skills", icon: <FaCode /> },
  { href: "/#projects", label: "Projects", icon: <FaBriefcase /> },
  { href: "/#contact", label: "Contact", icon: <FaEnvelope /> },
  { href: "/downloads", label: "Downloads", icon: <FaDownload /> },
];

function Navbar() {
  const navbarRef = useRef(null);
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll for navbar styling
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        navbarRef.current?.classList.add('shadow-lg');
        navbarRef.current?.classList.add('bg-opacity-90');
      } else {
        navbarRef.current?.classList.remove('shadow-lg');
        navbarRef.current?.classList.remove('bg-opacity-90');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === '/downloads') {
      setActiveSection('/downloads');
    } else {
      // For homepage, use scrollspy
      const handleScrollSpy = () => {
        const scrollPos = window.scrollY + 120;
        let current = "#home";
        
        for (const link of navLinks) {
          if (link.href.includes("#")) {
            const sectionId = link.href.split("#")[1];
            const section = document.getElementById(sectionId);
            if (section && section.offsetTop <= scrollPos) {
              current = link.href;
            }
          }
        }
        setActiveSection(current);
      };
      
      window.addEventListener('scroll', handleScrollSpy);
      handleScrollSpy();
      return () => window.removeEventListener('scroll', handleScrollSpy);
    }
  }, [location.pathname]);

  // Handle navigation clicks
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '/downloads') {
      // Navigate to downloads page
      navigate('/downloads');
    } else if (href.includes('#')) {
      const sectionId = href.split('#')[1];
      
      if (location.pathname === '/downloads') {
        // If on downloads page, navigate to home first then scroll
        navigate('/');
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        const target = document.getElementById(sectionId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <nav 
      ref={navbarRef} 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-opacity-75 bg-[var(--light)] border-b border-gray-100/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo with more spacing */}
          <div className="flex-shrink-0 ml-4 mr-8">
            <button 
              onClick={(e) => handleNavClick(e, "/#home")}
              className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 hover:bg-[var(--primary-light)]/8 hover:scale-105"
            >
              <div className="relative">
                <span className="text-[var(--dark)] font-bold text-xl tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                  Nimesh
                </span>
                <span className="text-[var(--primary)] font-bold text-xl animate-pulse">.</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] group-hover:w-full transition-all duration-300"></div>
              </div>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    relative px-5 py-2.5 rounded-xl font-medium text-sm tracking-wide transition-all duration-300
                    flex items-center gap-2 group overflow-hidden min-w-[120px] justify-center
                    ${activeSection === link.href 
                      ? 'text-white bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/25 scale-105 transform -translate-y-1' 
                      : 'text-[var(--gray)] hover:text-white hover:bg-gradient-to-r hover:from-[var(--primary-dark)] hover:to-[var(--primary)] hover:scale-102 hover:shadow-lg hover:shadow-[var(--primary)]/15 hover:-translate-y-0.5'}
                  `}
                >
                  {/* Icon */}
                  <span className={`text-base flex-shrink-0 relative z-20 transition-all duration-300 ${
                    activeSection === link.href ? 'transform rotate-6' : 'group-hover:transform group-hover:rotate-6'
                  }`}>
                    {link.icon}
                  </span>
                  
                  {/* Label with higher z-index */}
                  <span className="whitespace-nowrap relative z-20 font-semibold tracking-wide">
                    {link.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === link.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/80 rounded-full shadow-lg"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden mr-2">
            <button 
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center p-2.5 rounded-lg text-[var(--dark)] hover:text-[var(--primary)] transition-all duration-300 group"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-5 h-4 flex flex-col justify-center items-center">
                <span 
                  className={`absolute h-0.5 w-5 bg-current rounded-full transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5 group-hover:w-6'
                  }`}
                ></span>
                <span 
                  className={`absolute h-0.5 w-4 bg-current rounded-full transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:w-5'
                  }`}
                ></span>
                <span 
                  className={`absolute h-0.5 w-5 bg-current rounded-full transform transition-all duration-300 ease-out ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5 group-hover:w-6'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 sm:px-6 bg-[var(--light)] shadow-xl rounded-b-2xl border-t border-gray-100/10 backdrop-blur-lg">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`
                w-full relative px-4 py-4 rounded-xl font-medium text-base transition-all duration-300 
                flex items-center gap-4 group overflow-hidden
                ${activeSection === link.href 
                  ? 'text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] shadow-lg transform scale-105' 
                  : 'text-[var(--dark)] hover:bg-[var(--primary-light)]/8 hover:text-[var(--primary)] hover:scale-102 hover:translate-x-2'}
              `}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : undefined
              }}
            >
              {/* Background glow for active state */}
              {activeSection === link.href && (
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary-dark)]/20 rounded-xl blur-sm"></div>
              )}
              
              {/* Icon */}
              <span className={`text-lg flex-shrink-0 relative z-10 transition-all duration-300 ${
                activeSection === link.href ? 'transform rotate-6' : 'group-hover:transform group-hover:rotate-6'
              }`}>
                {link.icon}
              </span>
              
              {/* Label */}
              <span className="relative z-10 font-semibold tracking-wide">{link.label}</span>
              
              {/* Active indicator */}
              {activeSection === link.href && (
                <div className="absolute right-4 w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;