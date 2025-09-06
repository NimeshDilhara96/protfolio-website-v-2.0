import React from "react";
import { FaCode, FaBrain, FaPaintBrush, FaUsers, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

function About() {
  const skills = [
    { icon: <FaLaptopCode />, label: "Full-Stack Web Development" },
    { icon: <FaBrain />, label: "Artificial Intelligence" },
    { icon: <FaPaintBrush />, label: "UI/UX Design" },
    { icon: <FaUsers />, label: "Team Collaboration" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Background decoration - matching Home.jsx */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--light)] via-[var(--light-dark)] to-[var(--dark-light)] opacity-80"></div>
        
        {/* Circular Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-transparent blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[var(--accent-pink)]/15 to-transparent blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[30%] right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-bl from-[var(--accent)]/10 to-transparent blur-[70px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--light)]/30 to-[var(--light)] z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Background blur - using same style as Home */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent-pink)]/20 rounded-full blur-lg animate-pulse"></div>
                {/* Image container */}
                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-xl border border-white/20">
                  <img
                    src="https://avatars.githubusercontent.com/u/170844891?v=4"
                    alt="Nimesh Dilhara"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--primary)] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[var(--accent-pink)] rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Introduction */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--dark)] flex items-center gap-2">
                  <FaGraduationCap className="text-[var(--primary)]" />
                  Nimesh Dilhara Kulasooriya
                </h3>
                
                <div className="space-y-4 text-[var(--gray)] leading-relaxed">
                  <p className="text-lg">
                    <span className="font-semibold text-[var(--dark)]">BSc (Hons) Software Engineering</span> undergraduate 
                    with a passion for creating innovative digital solutions.
                  </p>
                  
                  <p>
                    I specialize in full-stack web development, artificial intelligence, and user experience design. 
                    My goal is to build applications that not only solve real-world problems but also provide 
                    exceptional user experiences.
                  </p>
                  
                  <p>
                    I believe in continuous learning and staying updated with the latest technologies 
                    to deliver modern, scalable, and efficient solutions.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--dark)]">Core Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-3 p-4 bg-dark/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm hover:shadow-md hover:border-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)]/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)]/20 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-[var(--dark)] group-hover:text-[var(--primary)] transition-colors duration-300">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)]">10+</div>
                  <div className="text-sm text-[var(--gray)]">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)]">2+</div>
                  <div className="text-sm text-[var(--gray)]">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)]">5+</div>
                  <div className="text-sm text-[var(--gray)]">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
