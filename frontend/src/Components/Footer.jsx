import React, { useState, useEffect } from "react";
import { FaHeart, FaCode, FaReact, FaSun, FaMoon } from "react-icons/fa";

function Footer() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <footer className="relative bg-gradient-to-t from-surface to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
                Nimesh Dilhara Kulasooriya
              </h3>
            </div>

            {/* Year badge */}
            <div className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full border border-accent/30">
              © {new Date().getFullYear()}
            </div>
          </div>

          {/* Right section with theme toggle and powered by */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button - Supabase Style */}
            <button
              onClick={toggleTheme}
              className="group relative p-2.5 bg-surface hover:bg-accent/20 border border-border-subtle hover:border-accent/50 rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun icon for light mode */}
                <FaSun
                  className={`absolute inset-0 text-accent transition-all duration-300 ${
                    theme === "light"
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-90 scale-50"
                  }`}
                />
                {/* Moon icon for dark mode */}
                <FaMoon
                  className={`absolute inset-0 text-text-primary transition-all duration-300 ${
                    theme === "dark"
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                />
              </div>

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface text-text-primary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-border-subtle">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>

            {/* Powered by section with MommentX logo */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-primary/70 font-medium hidden sm:inline">
                Powered by
              </span>
              <a
                href="https://mommentx.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-bold tracking-wide font-blanka text-lg md:text-xl lg:text-2xl"
              >
                <span className="text-text-primary group-hover:text-accent transition-colors duration-300">
                  Momment
                </span>
                <span className="text-[#ff5722] [text-shadow:0_0_12px_#ff4500,0_0_20px_#ff0000] group-hover:[text-shadow:0_0_15px_#ff4500,0_0_25px_#ff0000] transition-all duration-300">
                  X
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-primary/70">
            <p className="text-center sm:text-left">
              Full Stack Developer • UI/UX Designer • AI Enthusiast
            </p>
            <div className="flex items-center gap-4">
              <span>v8.0.1</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-accent/70 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-accent/50 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
