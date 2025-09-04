import React from "react";
import "./style.css";

function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-[var(--light)] flex justify-center items-center"
    >
      <div className="max-w-[900px] w-[92%] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16 bg-[var(--white)] rounded-2xl shadow-xl p-8 md:p-10 border border-[rgba(255,255,255,0.1)]">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center mb-6 md:mb-0">
          <div className="p-1.5 bg-gradient-to-br from-[var(--primary)] to-[var(--accent-pink)] rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/170844891?v=4"
              alt="Nimesh Dilhara"
              className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full object-cover shadow-md border-2 border-white"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 text-center md:text-left px-2 md:px-4">
          {/* Heading */}
          <div className="mb-4">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)] relative inline-block">
                 About Me
             <span className="absolute -bottom-3 left-0 w-16 h-1.5 bg-[var(--accent-pink)] rounded-full"></span>
            </h2>
         </div>

          {/* Description */}
          <div className="space-y-4 mb-8 text-[var(--dark)] text-base md:text-lg leading-relaxed">
            <p>
              Hi! I'm <strong className="text-[var(--primary-dark)]">Nimesh Dilhara Kulasooriya</strong>, a passionate{" "}
              <strong className="text-[var(--primary-dark)]">BSc (Hons) Software Engineering</strong> undergraduate with a strong interest in building modern, user-friendly web applications.
            </p>
            <p>
              My expertise spans full-stack development, AI, and UI/UX design. I thrive on solving real-world problems, exploring new technologies, and collaborating on innovative projects that make an impact.
            </p>
          </div>

          {/* Skills */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "fas fa-code", label: "Full-Stack Web Development" },
              { icon: "fas fa-brain", label: "Artificial Intelligence" },
              { icon: "fas fa-paint-brush", label: "UI/UX Design" },
              { icon: "fas fa-users", label: "Team Player & Mentor" },
            ].map((skill, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transform transition-transform hover:-translate-y-1"
              >
                <i className={`${skill.icon} text-[var(--primary-dark)]`}></i>
                {skill.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
