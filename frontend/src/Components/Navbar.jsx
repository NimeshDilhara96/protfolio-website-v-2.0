import React, { useEffect, useRef, useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaBriefcase, FaEnvelope, FaDownload } from 'react-icons/fa';

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
  const navMenuRef = useRef(null);
  const navToggleRef = useRef(null);
  const navbarRef = useRef(null);
  const [activeSection, setActiveSection] = useState("#home");

  // Mobile menu toggle
  useEffect(() => {
    const navToggle = navToggleRef.current;
    const navMenu = navMenuRef.current;

    function handleToggle() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    }

    navToggle.addEventListener('click', handleToggle);

    // Close menu on link click
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Scroll effect
    function handleScroll() {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add('scrolled');
      } else {
        navbarRef.current.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      navToggle.removeEventListener('click', handleToggle);
      window.removeEventListener('scroll', handleScroll);
      links.forEach(link => {
        link.removeEventListener('click', () => {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    };
  }, []);

  // Scrollspy: highlight active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 120; // Offset for navbar height
      let current = "#home";
      for (const link of navLinks) {
        if (link.href.startsWith("#")) {
          const section = document.querySelector(link.href);
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
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-[var(--light)] border-b border-[rgba(226,232,240,0.5)] z-[1020] transition-all duration-300 ${navbarRef.current?.classList.contains('scrolled') ? 'bg-[var(--light)] shadow-lg' : ''}`} ref={navbarRef}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-20">
        <div className="flex items-center gap-4 text-2xl font-bold text-[var(--dark)] no-underline">
          <span className="logo-text">
            Nimesh<span className="text-[var(--primary)]">.</span>
          </span>
        </div>
        <div className={`flex gap-4 list-none md:fixed md:top-20 md:right-0 md:w-[85vw] md:max-w-[290px] md:h-[calc(100vh-80px)] md:bg-[#0f172a] md:shadow-[-2px_0_16px_rgba(0,0,0,0.12)] md:flex-col md:justify-start md:items-start md:p-8 md:gap-2 md:transform md:translate-x-full md:opacity-0 md:invisible md:transition-all md:duration-300 md:z-[1100] md:rounded-l-xl ${navMenuRef.current?.classList.contains('active') ? 'md:translate-x-0 md:opacity-100 md:visible' : ''}`} ref={navMenuRef}>
          {navLinks.map(link => (
            <div className="relative md:w-full md:text-left" key={link.href}>
              <a
                href={link.href}
                className={`flex items-center gap-1 py-2 px-3 text-[var(--gray)] no-underline font-medium rounded-md transition-all duration-300 relative overflow-hidden ${activeSection === link.href ? 'text-white transform -translate-y-0.5 before:left-0' : 'before:left-[-100%]'} 
                before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[var(--primary)] before:to-[var(--primary-dark)] before:transition-[left] before:duration-300 before:z-[-1]
                hover:text-white hover:transform hover:-translate-y-0.5 hover:before:left-0
                md:flex md:items-center md:gap-3 md:py-3.5 md:px-3 md:w-full md:text-[1.08rem] md:text-white md:border-none md:rounded-lg md:bg-none md:transition-all md:duration-[0.18s] md:mb-0.5
                md:hover:bg-[var(--accent-pink)] md:hover:text-white md:hover:transform md:hover:translate-x-1 md:hover:scale-[1.04]
                ${activeSection === link.href ? 'md:bg-[var(--accent-pink)] md:text-white md:transform md:translate-x-1 md:scale-[1.04]' : ''}`}
                data-text={link.label}
              >
                <span className="text-[1.1rem] md:text-base">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </div>
          ))}
        </div>
        <div className={`hidden md:flex md:flex-col md:cursor-pointer md:p-2 md:rounded md:transition-all md:duration-300 md:z-[1101] ${navToggleRef.current?.classList.contains('active') ? 'active' : ''}`} ref={navToggleRef}>
          <span className={`w-[25px] h-[3px] bg-[var(--dark)] my-[3px] transition-all duration-300 rounded-full ${navToggleRef.current?.classList.contains('active') ? 'transform rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-[var(--dark)] my-[3px] transition-all duration-300 rounded-full ${navToggleRef.current?.classList.contains('active') ? 'opacity-0' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-[var(--dark)] my-[3px] transition-all duration-300 rounded-full ${navToggleRef.current?.classList.contains('active') ? 'transform -rotate-45 translate-x-[7px] -translate-y-[6px]' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;