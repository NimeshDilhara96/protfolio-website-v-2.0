import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaBriefcase, FaHandshake, FaEnvelope, FaDownload } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: "/#home", label: "Home", icon: <FaHome /> },
  { href: "/#about", label: "About", icon: <FaUser /> },
  { href: "/#education", label: "Education", icon: <FaGraduationCap /> },
  { href: "/#technologies", label: "Skills", icon: <FaCode /> },
  { href: "/#projects", label: "Projects", icon: <FaBriefcase /> },
  { href: "/#what-i-offer", label: "Services", icon: <FaHandshake /> },
  { href: "/#contact", label: "Contact", icon: <FaEnvelope /> },
  { href: "/downloads", label: "Downloads", icon: <FaDownload /> },
];

// Throttle utility for scroll events
function throttle(func, wait) {
  let timeout = null;
  let previous = 0;
  
  return function(...args) {
    const now = Date.now();
    const remaining = wait - (now - previous);
    
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}

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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle scroll for navbar styling (throttled)
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 50) {
        navbarRef.current?.classList.add('shadow-lg', 'bg-opacity-90');
      } else {
        navbarRef.current?.classList.remove('shadow-lg', 'bg-opacity-90');
      }
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy - throttled for performance
  const handleScrollSpy = useCallback(() => {
    throttle(() => {
      if (location.pathname !== '/') return; // Only on homepage
      
      const navbarHeight = navbarRef.current?.offsetHeight || 70;
      const scrollPos = window.scrollY + navbarHeight + 50;
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
    }, 100)();
  }, [location.pathname]);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === '/downloads') {
      setActiveSection('/downloads');
    } else {
      window.addEventListener('scroll', handleScrollSpy);
      handleScrollSpy();
      return () => window.removeEventListener('scroll', handleScrollSpy);
    }
  }, [location.pathname, handleScrollSpy]);

  // Handle navigation clicks
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '/downloads') {
      navigate('/downloads');
      setActiveSection('/downloads');
    } else if (href.includes('#')) {
      const sectionId = href.split('#')[1];
      
      if (location.pathname === '/downloads') {
        navigate('/');
        // Wait for navigation to complete
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            const navbarHeight = navbarRef.current?.offsetHeight || 70;
            window.scrollTo({
              top: target.offsetTop - navbarHeight,
              behavior: 'smooth'
            });
          }
        }, 300); // Increased delay
      } else {
        const target = document.getElementById(sectionId);
        if (target) {
          const navbarHeight = navbarRef.current?.offsetHeight || 70;
          window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <>
      {/* Add CSS animations to head */}
      <style>{`
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
        
        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
      `}</style>

      <nav 
        ref={navbarRef}
        aria-label="Main navigation"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-opacity-75 bg-[var(--light,#f9fafb)] border-b border-gray-100/20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 ml-4 mr-8">
              <button 
                type="button"
                onClick={(e) => handleNavClick(e, "/#home")}
                aria-label="Go to homepage"
                className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 hover:bg-[var(--primary-light,#818cf8)]/8 hover:scale-105"
              >
                <div className="relative">
                  <span className="text-[var(--dark,#1f2937)] font-bold text-xl tracking-tight group-hover:text-[var(--primary,#6366f1)] transition-colors duration-300">
                    Nimesh
                  </span>
                  <span className="text-[var(--primary,#6366f1)] font-bold text-xl animate-pulse">.</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary,#6366f1)] to-[var(--primary-dark,#4f46e5)] group-hover:w-full transition-all duration-300"></div>
                </div>
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-center gap-2" role="menubar">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    type="button"
                    role="menuitem"
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                    className={`
                      relative px-5 py-2.5 rounded-xl font-medium text-sm tracking-wide transition-all duration-300
                      flex items-center gap-2 group overflow-hidden min-w-[120px] justify-center
                      ${activeSection === link.href 
                        ? 'text-white bg-gradient-to-r from-[var(--primary,#6366f1)] via-[var(--primary,#6366f1)] to-[var(--primary-dark,#4f46e5)] shadow-lg shadow-[var(--primary,#6366f1)]/25 scale-105 transform -translate-y-1' 
                        : 'text-[var(--gray,#6b7280)] hover:text-white hover:bg-gradient-to-r hover:from-[var(--primary-dark,#4f46e5)] hover:to-[var(--primary,#6366f1)] hover:scale-102 hover:shadow-lg hover:shadow-[var(--primary,#6366f1)]/15 hover:-translate-y-0.5'}
                    `}
                  >
                    <span className={`text-base flex-shrink-0 relative z-20 transition-all duration-300 ${
                      activeSection === link.href ? 'transform rotate-6' : 'group-hover:transform group-hover:rotate-6'
                    }`}>
                      {link.icon}
                    </span>
                    
                    <span className="whitespace-nowrap relative z-20 font-semibold tracking-wide">
                      {link.label}
                    </span>
                    
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
                type="button"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="relative inline-flex items-center justify-center p-2.5 rounded-lg text-[var(--dark,#1f2937)] hover:text-[var(--primary,#6366f1)] transition-all duration-300 group"
              >
                <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
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
          id="mobile-menu"
          role="menu"
          className={`md:hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-1 sm:px-6 bg-[var(--light,#f9fafb)] shadow-xl rounded-b-2xl border-t border-gray-100/10 backdrop-blur-lg">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                type="button"
                role="menuitem"
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href ? 'page' : undefined}
                className={`
                  w-full relative px-4 py-4 rounded-xl font-medium text-base transition-all duration-300 
                  flex items-center gap-4 group overflow-hidden
                  ${activeSection === link.href 
                    ? 'text-white bg-gradient-to-r from-[var(--primary,#6366f1)] to-[var(--primary-dark,#4f46e5)] shadow-lg transform scale-105' 
                    : 'text-[var(--dark,#1f2937)] hover:bg-[var(--primary-light,#818cf8)]/8 hover:text-[var(--primary,#6366f1)] hover:scale-102 hover:translate-x-2'}
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'slideOutLeft 0.3s ease-out forwards'
                }}
              >
                {activeSection === link.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary,#6366f1)]/20 to-[var(--primary-dark,#4f46e5)]/20 rounded-xl blur-sm"></div>
                )}
                
                <span className={`text-lg flex-shrink-0 relative z-10 transition-all duration-300 ${
                  activeSection === link.href ? 'transform rotate-6' : 'group-hover:transform group-hover:rotate-6'
                }`}>
                  {link.icon}
                </span>
                
                <span className="relative z-10 font-semibold tracking-wide">{link.label}</span>
                
                {activeSection === link.href && (
                  <div className="absolute right-4 w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;