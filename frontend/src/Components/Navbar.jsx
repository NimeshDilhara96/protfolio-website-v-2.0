import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education" },
  { href: "/#technologies", label: "Skills" },
  { href: "/#what-i-offer", label: "Services" },
  { href: "/downloads", label: "Downloads" },
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
  const [activeSection, setActiveSection] = useState("/#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      setScrolled(window.scrollY > 10);
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy - throttled for performance
  const handleScrollSpy = useCallback(() => {
    if (location.pathname !== '/') return;
    
    const throttledFn = throttle(() => {
      const navbarHeight = navbarRef.current?.offsetHeight || 70;
      const scrollPos = window.scrollY + navbarHeight + 50;
      let current = "/#home";
      
      for (const link of navLinks) {
        if (link.href.startsWith('/#')) {
          const sectionId = link.href.replace('/#', '');
          const section = document.getElementById(sectionId);
          if (section && section.offsetTop <= scrollPos) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    }, 100);
    
    throttledFn();
  }, [location.pathname]);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === '/downloads') {
      setActiveSection('/downloads');
    } else if (location.pathname === '/') {
      window.addEventListener('scroll', handleScrollSpy);
      handleScrollSpy();
      return () => window.removeEventListener('scroll', handleScrollSpy);
    }
  }, [location.pathname, handleScrollSpy]);

  // Handle navigation clicks
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            const navbarHeight = navbarRef.current?.offsetHeight || 70;
            window.scrollTo({
              top: target.offsetTop - navbarHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
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
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav 
        ref={navbarRef}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#11181C]/80 backdrop-blur-xl border-b border-[#F8F9FA]/10 shadow-sm' 
            : 'bg-[#11181C]/50 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                type="button"
                onClick={(e) => handleNavClick(e, "/#home")}
                aria-label="Go to homepage"
                className="group flex items-center gap-2 text-[#F8F9FA] font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
              >
                <span>Nimesh Dilhara</span>
                <span className="text-[#34B27B] animate-pulse">.</span>
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-1" role="menubar">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    type="button"
                    role="menuitem"
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                    className="relative px-3 py-2 text-sm font-medium text-[#F8F9FA]/70 hover:text-[#F8F9FA] transition-colors group"
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#34B27B] transform origin-left transition-transform duration-200 ${
                      activeSection === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[#F8F9FA]/10">
                {/* GitHub Stars */}
                <a
                  href="https://github.com/Nimeshdilhara96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xl:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#F8F9FA]/70 hover:text-[#F8F9FA] border border-[#F8F9FA]/10 rounded-lg hover:border-[#34B27B] transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>1.2K</span>
                </a>

                <button
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="px-4 py-2 text-sm font-medium text-[#F8F9FA]/70 hover:text-[#F8F9FA] transition-colors"
                >
                  Contact
                </button>

                <button
                  onClick={(e) => handleNavClick(e, "/#projects")}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#34B27B] hover:bg-[#34B27B]/90 rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  View Projects
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button 
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          id="mobile-menu"
          role="menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-[#11181C]/95 backdrop-blur-xl border-t border-[#F8F9FA]/10 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                role="menuitem"
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href ? 'page' : undefined}
                className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all ${
                  activeSection === link.href 
                    ? 'text-[#34B27B] bg-[#34B27B]/20' 
                    : 'text-[#F8F9FA]/70 hover:bg-[#11181C]'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2 border-t border-[#F8F9FA]/10">
              <button
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="w-full px-4 py-3 text-base font-medium text-[#F8F9FA]/70 hover:bg-[#11181C] rounded-lg transition-all"
              >
                Contact
              </button>

              <button
                onClick={(e) => handleNavClick(e, "/#projects")}
                className="w-full px-4 py-3 text-base font-medium text-white bg-[#34B27B] hover:bg-[#34B27B]/90 rounded-lg transition-all shadow-sm"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;