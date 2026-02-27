import React from "react";
import { FaCode, FaBrain, FaPaintBrush, FaUsers, FaGraduationCap, FaLaptopCode, FaAward, FaRocket } from 'react-icons/fa';
import aboutPhoto from '../assets/about.webp';

function About() {
  const skills = [
    { icon: <FaLaptopCode />, label: "Full-Stack Development", description: "Modern web applications" },
    { icon: <FaBrain />, label: "AI Enthusiast", description: "ML & data science" },
    { icon: <FaCode />, label: "React,Next.js,Node.js & .NET", description: "Technologies Mastered" },
    { icon: <FaUsers />, label: "UI/UX Design", description: "User-centered design" },
  ];

  const highlights = [
    { icon: <FaGraduationCap />, title: "Education", value: "Bachelor of Information Technology (Hons.) in Software Engineering" },
    { icon: <FaAward />, title: "Experience", value: "2+ Years Learning & Building" },
    { icon: <FaRocket />, title: "Projects", value: "10+ Completed Projects" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-[#11181C] via-[#11181C] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#11181C] via-black to-[#11181C] opacity-80"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#34B27B]/10 to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#34B27B]/10 to-transparent blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#11181C]/40 to-[#11181C] z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8F9FA] mb-3 tracking-tight">
            About Me
          </h2>
          <p className="text-[#F8F9FA]/80 text-lg max-w-2xl mx-auto mb-4">
            Passionate software engineer dedicated to building innovative solutions
          </p>
          <div className="w-20 h-1 bg-[#34B27B] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Profile Image - Left Column (2/5) */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-[#34B27B]/20 rounded-full blur-xl"></div>
                <div className="relative bg-[#11181C]/80 backdrop-blur-sm p-3 rounded-full shadow-2xl border border-[#F8F9FA]/10">
                  <img
                    src={aboutPhoto}
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
                    className="bg-[#11181C]/60 backdrop-blur-sm p-4 rounded-xl border border-[#F8F9FA]/10 shadow-sm hover:shadow-md hover:border-[#34B27B]/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#34B27B]/20 rounded-lg flex items-center justify-center text-[#34B27B] text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-[#F8F9FA]/70 font-medium">{item.title}</div>
                        <div className="text-[#F8F9FA] font-semibold">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content - Right Column (3/5) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <div className="bg-[#11181C]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#F8F9FA]/10 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-[#F8F9FA] mb-6">
                  Nimesh Dilhara Kulasooriya
                </h3>
                
                <div className="space-y-4 text-[#F8F9FA]/80 leading-relaxed text-base">
                  <p>
                    As a <span className="font-semibold text-[#34B27B]">BSc (Hons) Software Engineering</span> undergraduate, 
                    I am dedicated to crafting innovative digital solutions that bridge technology and user needs. 
                    My approach combines technical excellence with creative problem-solving.
                  </p>
                  
                  <p>
                    Specializing in <span className="font-semibold text-[#34B27B]">full-stack web development</span>, 
                    <span className="font-semibold text-[#34B27B]"> artificial intelligence</span>, and 
                    <span className="font-semibold text-[#34B27B]"> user experience design</span>, I create 
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
                <h4 className="text-xl font-bold text-[#F8F9FA]">Core Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group bg-[#11181C]/60 backdrop-blur-sm p-5 rounded-xl border border-[#F8F9FA]/10 shadow-sm hover:shadow-lg hover:border-[#34B27B]/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#34B27B]/20 rounded-xl flex items-center justify-center text-[#34B27B] text-xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-[#F8F9FA] mb-1 group-hover:text-[#34B27B] transition-colors duration-300">
                            {skill.label}
                          </div>
                          <div className="text-sm text-[#F8F9FA]/70">
                            {skill.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Stats */}
              <div className="bg-[#34B27B]/10 backdrop-blur-sm p-8 rounded-2xl border border-[#F8F9FA]/10">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#34B27B] mb-2">10+</div>
                    <div className="text-sm text-[#F8F9FA]/70 font-medium">Projects Completed</div>
                  </div>
                  <div className="text-center border-x border-[#F8F9FA]/20">
                    <div className="text-3xl md:text-4xl font-bold text-[#34B27B] mb-2">5+</div>
                    <div className="text-sm text-[#F8F9FA]/70 font-medium">Technologies Mastered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#34B27B] mb-2">100%</div>
                    <div className="text-sm text-[#F8F9FA]/70 font-medium">Commitment</div>
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
