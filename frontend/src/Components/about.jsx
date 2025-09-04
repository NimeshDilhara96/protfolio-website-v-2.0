import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-[var(--light)] md:py-12 sm:py-8 xs:py-4">
      <div className="flex flex-row items-center gap-12 max-w-[900px] mx-auto bg-[var(--white)] rounded-2xl shadow-lg p-10 flex-nowrap lg:gap-8 lg:p-6 md:flex-col md:items-center md:gap-6 md:p-4 md:text-center md:shadow-md md:w-full md:max-w-[98vw] md:box-border sm:p-3 sm:gap-3 sm:rounded-md sm:max-w-[100vw] xs:p-2 xs:gap-2">
        <div className="flex-shrink-0 flex justify-center items-center">
          <img 
            src="https://avatars.githubusercontent.com/u/170844891?v=4" 
            alt="Nimesh Dilhara" 
            className="w-[180px] h-[180px] rounded-full object-cover shadow-md border-4 border-[var(--primary-light)] bg-[var(--white)] lg:w-[140px] lg:h-[140px] md:w-[120px] md:h-[120px] md:mb-4 sm:w-[90px] sm:h-[90px] xs:w-[64px] xs:h-[64px]" 
          />
        </div>
        <div className="flex-1 min-w-0 break-words md:p-0 md:text-center md:w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-[var(--primary-dark)] tracking-wider md:text-xl sm:text-lg">About Me</h2>
          <p className="text-base text-[var(--gray)] leading-relaxed mb-4 md:text-base sm:text-[0.98rem] xs:text-[0.96rem]">
            Hi! I'm <strong>Nimesh Dilhara Kulasooriya </strong>, a passionate <strong>BSc (Hons) Software Engineering</strong> undergraduate with a strong interest in building modern, user-friendly web applications.<br />
            My expertise spans full-stack development, AI, and UI/UX design. I thrive on solving real-world problems, exploring new technologies, and collaborating on innovative projects that make an impact.
          </p>
          <br />
          <ul className="flex flex-col gap-2 md:gap-1.5 md:justify-center md:pl-0 sm:gap-1">
            <li className="flex items-center gap-2.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg p-2 pl-3 text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-all duration-200 hover:bg-[#e0ffe9] md:justify-center md:w-fit md:mx-auto md:min-w-[60%] md:max-w-full md:box-border md:text-[0.97rem] md:py-1.5 md:px-3 sm:text-[0.95rem] sm:py-1 sm:px-2 xs:text-[0.93rem] xs:py-1 xs:px-2 xs:min-w-[80%]">
              <i className="fas fa-code text-[#00ff90] text-[1.1em]"></i> Full-Stack Web Development
            </li>
            <li className="flex items-center gap-2.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg p-2 pl-3 text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-all duration-200 hover:bg-[#e0ffe9] md:justify-center md:w-fit md:mx-auto md:min-w-[60%] md:max-w-full md:box-border md:text-[0.97rem] md:py-1.5 md:px-3 sm:text-[0.95rem] sm:py-1 sm:px-2 xs:text-[0.93rem] xs:py-1 xs:px-2 xs:min-w-[80%]">
              <i className="fas fa-brain text-[#00ff90] text-[1.1em]"></i> Artificial Intelligence Enthusiast.
            </li>
            <li className="flex items-center gap-2.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg p-2 pl-3 text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-all duration-200 hover:bg-[#e0ffe9] md:justify-center md:w-fit md:mx-auto md:min-w-[60%] md:max-w-full md:box-border md:text-[0.97rem] md:py-1.5 md:px-3 sm:text-[0.95rem] sm:py-1 sm:px-2 xs:text-[0.93rem] xs:py-1 xs:px-2 xs:min-w-[80%]">
              <i className="fas fa-paint-brush text-[#00ff90] text-[1.1em]"></i> UI/UX Design
            </li>
            <li className="flex items-center gap-2.5 bg-gradient-to-r from-[#e0ffe9] to-[#f3f4f6] rounded-lg p-2 pl-3 text-[#1a2e22] font-medium shadow-sm border-l-4 border-[#00ff90] transition-all duration-200 hover:bg-[#e0ffe9] md:justify-center md:w-fit md:mx-auto md:min-w-[60%] md:max-w-full md:box-border md:text-[0.97rem] md:py-1.5 md:px-3 sm:text-[0.95rem] sm:py-1 sm:px-2 xs:text-[0.93rem] xs:py-1 xs:px-2 xs:min-w-[80%]">
              <i className="fas fa-users text-[#00ff90] text-[1.1em]"></i> Team Player & Mentor
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;