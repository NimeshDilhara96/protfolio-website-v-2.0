import React, { useState, useEffect } from 'react';
import { FaHeart, FaCode, FaReact, FaSun, FaMoon } from 'react-icons/fa';

function Footer() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <footer className="relative bg-gradient-to-t from-[#11181C] to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#34B27B]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#34B27B]/5 rounded-full blur-xl"></div>
      </div>

      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#34B27B]/30 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#F8F9FA] mb-1">
                Nimesh Dilhara Kulasooriya
              </h3>
             
            </div>
            
            {/* Year badge */}
            <div className="px-3 py-1 bg-[#34B27B]/20 text-[#34B27B] text-sm font-medium rounded-full border border-[#34B27B]/30">
              © {new Date().getFullYear()}
            </div>
          </div>

          {/* Right section with theme toggle and powered by */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button - Supabase Style */}
            <button
              onClick={toggleTheme}
              className="group relative p-2.5 bg-[#11181C] hover:bg-[#34B27B]/20 border border-[#F8F9FA]/10 hover:border-[#34B27B]/50 rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun icon for light mode */}
                <FaSun 
                  className={`absolute inset-0 text-[#34B27B] transition-all duration-300 ${
                    theme === 'light' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 rotate-90 scale-50'
                  }`}
                />
                {/* Moon icon for dark mode */}
                <FaMoon 
                  className={`absolute inset-0 text-[#F8F9FA] transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 -rotate-90 scale-50'
                  }`}
                />
              </div>
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#11181C] text-[#F8F9FA] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#F8F9FA]/10">
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </span>
            </button>

            {/* Powered by section with MommentX logo */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#F8F9FA]/70 font-medium hidden sm:inline">Powered by</span>
              <a
                href="https://mommentx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-2.5 bg-[#34B27B] text-white text-sm font-semibold rounded-lg shadow-lg shadow-[#34B27B]/20 hover:shadow-xl hover:shadow-[#34B27B]/30 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-[#34B27B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content with logo */}
                <div className="relative z-10 flex items-center gap-2">
                  
                  <span className="font-bold tracking-wide">MommentX(Me)</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-[#F8F9FA]/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F9FA]/70">
            <p className="text-center sm:text-left">
              Full Stack Developer • UI/UX Designer • AI Enthusiast 
            </p>
            <div className="flex items-center gap-4">
              <span>v4.2.0</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[#34B27B] rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-[#34B27B]/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-[#34B27B]/50 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
}

export default Footer;