import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-b from-black to-[#11181C] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#34B27B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#34B27B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8F9FA] mb-6 tracking-tight">
            Featured Projects
          </h2>
          
          <p className="text-lg text-[#F8F9FA]/80 mb-8 leading-relaxed">
            I've built <span className="text-[#34B27B] font-semibold">10+ projects</span> including full-stack web applications, AI-powered solutions, and UI/UX designs. Each project demonstrates real-world problem-solving with modern technologies like React, Node.js, and MongoDB.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#34B27B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#34B27B]/50 transition-all duration-300 hover:scale-105 group"
          >
            <span>View All Projects</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
