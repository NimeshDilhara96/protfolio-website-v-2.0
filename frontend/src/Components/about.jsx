import React from 'react';
import './style.css';

function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--light)] flex justify-center items-center">
      <div className="max-w-[900px] w-[92%] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-16 bg-[var(--white)] rounded-2xl shadow-xl p-6 md:p-10 border border-[rgba(255,255,255,0.1)]">
        <div className="flex-shrink-0 flex justify-center items-center mb-2 md:mb-0">
          <div className="p-1.5 bg-gradient-to-br from-[var(--primary)] to-[var(--accent-pink)] rounded-full">
            <img 
              src="https://avatars.githubusercontent.com/u/170844891?v=4" 
              alt="Nimesh Dilhara" 
              className="w-[90px] h-[90px] md:w-[180px] md:h-[180px] rounded-full object-cover shadow-md border-2 border-white"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-dark)] relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--accent-pink)] rounded-full"></span>
          </h2>
          <p className="text-[var(--dark)] mb-6 text-base md:text-lg leading-relaxed">
            Hi! I'm <strong className="text-[var(--primary-dark)]">Nimesh Dilhara Kulasooriya</strong>, a passionate <strong className="text-[var(--primary-dark)]">BSc (Hons) Software Engineering</strong> undergraduate with a strong interest in building modern, user-friendly web applications.<br className="hidden md:block" />
            <span className="block mt-3">My expertise spans full-stack development, AI, and UI/UX design. I thrive on solving real-world problems, exploring new technologies, and collaborating on innovative projects that make an impact.</span>
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-3">
            <li className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-transform hover:translate-y-[-2px]">
              <i className="fas fa-code text-[var(--primary-dark)]"></i> Full-Stack Web Development
            </li>
            <li className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-transform hover:translate-y-[-2px]">
              <i className="fas fa-brain text-[var(--primary-dark)]"></i> Artificial Intelligence Enthusiast
            </li>
            <li className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-transform hover:translate-y-[-2px]">
              <i className="fas fa-paint-brush text-[var(--primary-dark)]"></i> UI/UX Design
            </li>
            <li className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-transform hover:translate-y-[-2px]">
              <i className="fas fa-users text-[var(--primary-dark)]"></i> Team Player & Mentor
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;