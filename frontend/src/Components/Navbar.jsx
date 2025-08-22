import React, { useEffect, useRef, useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaBriefcase, FaEnvelope, FaDownload } from 'react-icons/fa';
import './style.css';

const navLinks = [
  { href: "/#home", label: "Home", icon: <FaHome /> },
  { href: "/#about", label: "About", icon: <FaUser /> },
  { href: "/#education", label: "Education", icon: <FaGraduationCap /> },
  { href: "/#technologies", label: "Skills", icon: <FaCode /> },
  { href: "/#projects", label: "Projects", icon: <FaBriefcase /> },
  { href: "/#contact", label: "Contact", icon: <FaEnvelope /> },
  { href: "/downloads", label: "Downloads", icon: <FaDownload /> }, // Change to page route
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
    const links = navMenu.querySelectorAll('.nav-link');
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
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <nav className="navbar" id="navbar" ref={navbarRef}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">
            Nimesh<span style={{ color: 'var(--primary)' }}>.</span>
          </span>
        </div>
        <div className="nav-menu" id="nav-menu" ref={navMenuRef}>
          {navLinks.map(link => (
            <div className="nav-item" key={link.href}>
              <a
                href={link.href}
                className={`nav-link${activeSection === link.href ? ' active' : ''}`}
                data-text={link.label}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="nav-toggle" id="nav-toggle" ref={navToggleRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;