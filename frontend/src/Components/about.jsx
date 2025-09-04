import React from 'react';
import './style.css'; // Keep importing style.css for other styles

function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-[var(--light)] flex justify-center items-center">
      <div className="max-w-[900px] w-[95%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-12 bg-[var(--white)] rounded-xl shadow-lg p-4 md:p-8">
        <div className="flex-shrink-0 flex justify-center items-center">
          <img 
            src="https://avatars.githubusercontent.com/u/170844891?v=4" 
            alt="Nimesh Dilhara" 
            className="w-[80px] h-[80px] md:w-[180px] md:h-[180px] rounded-full object-cover shadow-md border-4 border-[var(--primary-light)]"
          />
        </div>
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-[var(--primary-dark)]">About Me</h2>
          <p className="text-[var(--dark)] mb-4">
            Hi! I'm <strong>Nimesh Dilhara Kulasooriya </strong>, a passionate <strong>BSc (Hons) Software Engineering</strong> undergraduate with a strong interest in building modern, user-friendly web applications.<br />
            My expertise spans full-stack development, AI, and UI/UX design. I thrive on solving real-world problems, exploring new technologies, and collaborating on innovative projects that make an impact.
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            <li className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90]">
              <i className="fas fa-code"></i> Full-Stack Web Development
            </li>
            <li className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90]">
              <i className="fas fa-brain"></i> Artificial Intelligence Enthusiast
            </li>
            <li className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90]">
              <i className="fas fa-paint-brush"></i> UI/UX Design
            </li>
            <li className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90]">
              <i className="fas fa-users"></i> Team Player & Mentor
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;