import React from 'react';
import { FaCode, FaPalette, FaCog } from 'react-icons/fa';

const WhatIOffer = () => {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive, modern web applications with clean code and best practices. From landing pages to full-stack applications.",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"]
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces using Figma. Focusing on user experience and modern design principles.",
      skills: ["Figma", "Prototyping", "Wireframing", "Design Systems"]
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Custom Software Solutions",
      description: "Developing tailored software solutions to solve your unique business challenges. From concept to deployment.",
      skills: ["System Design", "API Development", "Database Design", "DevOps"]
    }
  ];

  return (
    <section id="what-i-offer" className="min-h-screen bg-gradient-to-br from-[#11181C] via-black to-[#11181C] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F8F9FA] mb-4">
            What I Offer
          </h2>
          <div className="w-24 h-1 bg-[#34B27B] mx-auto mb-6"></div>
          <p className="text-xl text-[#F8F9FA]/80 max-w-2xl mx-auto">
            Transforming ideas into digital reality with expertise in development, design, and custom solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#11181C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#F8F9FA]/10 hover:border-[#34B27B] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#34B27B]/20"
            >
              {/* Icon */}
              <div className="mb-6 text-[#34B27B] group-hover:text-[#34B27B]/80 transition-colors duration-300 group-hover:scale-110 transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#F8F9FA] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#F8F9FA]/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-[#11181C]/50 text-[#F8F9FA]/80 rounded-full border border-[#F8F9FA]/20 group-hover:border-[#34B27B]/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-[#34B27B]/0 group-hover:bg-[#34B27B]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-[#F8F9FA]/80 text-lg mb-6">
            Ready to bring your project to life?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#34B27B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#34B27B]/50 transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;
