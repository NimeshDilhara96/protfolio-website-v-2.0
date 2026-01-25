import React from 'react';
import { FaHeart, FaCode, FaReact } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[var(--dark-light)] to-[var(--light-dark)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[var(--accent-pink)]/5 rounded-full blur-xl"></div>
      </div>

      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--dark)] mb-1">
                Nimesh Dilhara Kulasooriya
              </h3>
             
            </div>
            
            {/* Year badge */}
            <div className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium rounded-full border border-[var(--primary)]/20">
              © {new Date().getFullYear()}
            </div>
          </div>

          {/* Powered by section with MommentX logo */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--gray)] font-medium">Powered by</span>
            <a
              href="https://mommentx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-sm font-semibold rounded-lg shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content with logo */}
              <div className="relative z-10 flex items-center gap-2">
                
                <span className="font-bold tracking-wide">MommentX</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-[var(--gray)]/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--gray)]">
            <p className="text-center sm:text-left">
              Full Stack Developer • UI/UX Designer • AI Enthusiast 
            </p>
            <div className="flex items-center gap-4">
              <span>v3.2.0</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[var(--primary)] rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-[var(--accent)] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-[var(--accent-pink)] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
}

export default Footer;