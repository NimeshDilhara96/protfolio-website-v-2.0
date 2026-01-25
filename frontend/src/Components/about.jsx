import React from "react";
import { FaCode, FaBrain, FaPaintBrush, FaUsers, FaGraduationCap, FaLaptopCode, FaAward, FaRocket } from 'react-icons/fa';

function About() {
  const skills = [
    { icon: <FaLaptopCode />, label: "Full-Stack Development", description: "Modern web applications" },
    { icon: <FaBrain />, label: "Artificial Intelligence", description: "ML & data science" },
    { icon: <FaPaintBrush />, label: "UI/UX Design", description: "User-centered design" },
    { icon: <FaUsers />, label: "Team Collaboration", description: "Agile methodologies" },
  ];

  const highlights = [
    { icon: <FaGraduationCap />, title: "Education", value: "BSc (Hons) Software Engineering" },
    { icon: <FaAward />, title: "Experience", value: "2+ Years Learning & Building" },
    { icon: <FaRocket />, title: "Projects", value: "10+ Completed Projects" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--light)] via-[var(--light-dark)] to-[var(--dark-light)] opacity-80"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[var(--primary)]/15 to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[var(--accent-pink)]/10 to-transparent blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--light)]/40 to-[var(--light)] z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-3 tracking-tight">
            About Me
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto mb-4">
            Passionate software engineer dedicated to building innovative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Profile Image - Left Column (2/5) */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent-pink)]/10 rounded-full blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-2xl border border-white/40">
                  <img
                    src="https://avatars.githubusercontent.com/u/170844891?v=4"
                    alt="Nimesh Dilhara"
                    className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Highlights Cards */}
              <div className="w-full space-y-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent-pink)]/20 rounded-lg flex items-center justify-center text-[var(--primary)] text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-[var(--gray)] font-medium">{item.title}</div>
                        <div className="text-[var(--dark)] font-semibold">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content - Right Column (3/5) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/40 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)] mb-6">
                  Nimesh Dilhara Kulasooriya
                </h3>
                
                <div className="space-y-4 text-[var(--gray)] leading-relaxed text-base">
                  <p>
                    As a <span className="font-semibold text-[var(--dark)]">BSc (Hons) Software Engineering</span> undergraduate, 
                    I am dedicated to crafting innovative digital solutions that bridge technology and user needs. 
                    My approach combines technical excellence with creative problem-solving.
                  </p>
                  
                  <p>
                    Specializing in <span className="font-semibold text-[var(--dark)]">full-stack web development</span>, 
                    <span className="font-semibold text-[var(--dark)]"> artificial intelligence</span>, and 
                    <span className="font-semibold text-[var(--dark)]"> user experience design</span>, I create 
                    applications that deliver both functionality and exceptional user experiences.
                  </p>
                  
                  <p>
                    I am committed to continuous learning, staying current with emerging technologies, and 
                    delivering scalable, efficient solutions that make a meaningful impact.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-5">
                <h4 className="text-xl font-bold text-[var(--dark)]">Core Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/40 shadow-sm hover:shadow-lg hover:border-[var(--primary)]/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent-pink)]/10 rounded-xl flex items-center justify-center text-[var(--primary)] text-xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--dark)] mb-1 group-hover:text-[var(--primary)] transition-colors duration-300">
                            {skill.label}
                          </div>
                          <div className="text-sm text-[var(--gray)]">
                            {skill.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Stats */}
              <div className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent-pink)]/5 backdrop-blur-sm p-8 rounded-2xl border border-white/40">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] bg-clip-text text-transparent mb-2">10+</div>
                    <div className="text-sm text-[var(--gray)] font-medium">Projects Completed</div>
                  </div>
                  <div className="text-center border-x border-white/30">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] bg-clip-text text-transparent mb-2">5+</div>
                    <div className="text-sm text-[var(--gray)] font-medium">Technologies Mastered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] bg-clip-text text-transparent mb-2">100%</div>
                    <div className="text-sm text-[var(--gray)] font-medium">Commitment</div>
                  </div>
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
