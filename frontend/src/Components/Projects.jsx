import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import nextgenCover from '../assets/nextgensport club project cover.webp';
import nutricoreCover from '../assets/Nutricare cover.webp';
import ucareCover from '../assets/ucare project cover.webp';
import aiPromptCover from '../assets/Ai_Promptgallery.webp';
import nutricaremobilecover from '../assets/nutricaremobilecover.webp';
import personalprotfoliyo from '../assets/personalprotfoliyo.webp';
import hotelcover from '../assets/hotelcover.webp';

// Add a "type" property for filtering
const projects = [
  {
    "name": "NextGen-Sport-Club-Management-System",
    "type": "Web App",
    "description": "NextGen Sports Club is an AI-powered full-stack MERN application designed to modernize sports club operations with smart booking, QR-based access, AI-generated training & meal plans, e-commerce, real-time messaging, and automated email notifications.",
    "html_url": "https://github.com/NimeshDilhara96/NextgensportclubSystem",
    "image": nextgenCover,
    "tags": ["React", "Node.js", "MongoDB", "AI", "MERN"]
  },
  {
    "name": "website tracking system",
    "type": "Web App",
    "description": "A comprehensive website tracking system that monitors user behavior, page views, and engagement metrics to provide actionable insights for website optimization.",
    "html_url": "https://github.com/NimeshDilhara96/website-tracking-system",
    "image": null,
    "tags": ["Still Developing"]
  },
  {
    "name": "Nutricare-Meal_Management_System",
    "type": "Web App",
    "description": "Nutricare is a personalized meal planning and health management system designed to cater to individual dietary needs and health conditions. It empowers users to lead healthier lifestyles with customized meal plans, health insights, and expert consultations.",
    "html_url": "https://github.com/NimeshDilhara96/Nutricare-Meal_Management_System",
    "image": nutricoreCover,
    "tags": ["PHP", "Health", "API"]
  },
  {
    "name": "U-CARE Hospital Consultation Mobile UI Design",
    "type": "UI/UX",
    "description": "A modern and user-friendly mobile UI design for hospital consultation, created in Figma. View the full project and design details on Behance.",
    "html_url": "https://www.behance.net/gallery/219353335/U-CARE-Hospital-Consultation-Mobile-UI-Design%28Figma%29",
    "image": ucareCover,
    "tags": ["Figma", "UI/UX", "Mobile"]
  },
  {
    "name": "Ai Promt Gallery",
    "type": "Web App",
    "description": "Live Demo: https://mometec.codes/Ai-Prompt-Gallery/  |  A web application that allows users to explore, create, and share AI-generated prompts for various applications, fostering creativity and collaboration in the AI community.",
    "html_url": "https://www.mometec.codes",
    "image": aiPromptCover,
    "tags": ["AI", "React", "Community"]
  },
  {
    "name": "Nutricare Mobile Application UI Design",
    "type": "UI/UX",
    "description": "A sleek and intuitive mobile application UI design for Nutricare, focused on personalized meal management and health tracking. Explore the full design project on Behance.",
    "html_url": "https://www.behance.net/gallery/219353335/Nutricare-Mobile-Application-UI-Design",
    "image": nutricaremobilecover,
    "tags": ["Figma", "UI/UX", "Mobile"]
  },
  {
    "name": "Personal Portfolio Website",
    "type": "Web App",
    "description": "A personal portfolio website showcasing projects, skills, and experience, built with React and Tailwind CSS for a modern and responsive design.",
    "html_url": "https://github.com/NimeshDilhara96/protfolio-website-v-2.0",
    "image": personalprotfoliyo,
    "tags": ["React", "Tailwind CSS", "Portfolio"]
  },
  {
    "name": "Hotel landing page design",
    "type": "Web App",
    "description": "A modern and visually appealing hotel landing page design, created using HTML, CSS, and JavaScript to enhance user experience and drive bookings.",
    "html_url": "test",
    "image": hotelcover,
    "tags": ["Still Developing"]
  },
  {
    "name": "queue Management System",
    "type": "Web App",
    "description": "A web-based queue management system designed to streamline customer service operations by efficiently managing and organizing queues in various service environments.",
    "html_url": ",test",
    //"image": ,
    "tags": ["Still Developing"]
  }

];

// Get unique types for filter buttons
const types = ["All", ...Array.from(new Set(projects.map(p => p.type)))];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [itemsToShow, setItemsToShow] = useState(6);

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.type === filter);

  const visibleProjects = filteredProjects.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredProjects.length;

  return (
    <section id="projects" className="py-12 md:py-16 bg-gradient-to-b from-black to-[#11181C] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#34B27B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#34B27B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
           
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-3 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-[#34B27B] mx-auto rounded-full"></div>
          <p className="text-[#F8F9FA]/80 text-sm md:text-base max-w-2xl mx-auto mt-3">
            Delivering exceptional digital solutions with modern technology and design excellence
          </p>
        </div>

        {/* Professional Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {types.map(type => (
            <button
              key={type}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                filter === type
                  ? 'bg-[#34B27B] text-white shadow-lg shadow-[#34B27B]/20'
                  : 'bg-[#11181C] text-[#F8F9FA]/70 hover:text-[#34B27B] border border-[#F8F9FA]/10 hover:border-[#34B27B]/50 hover:shadow-md'
              }`}
              onClick={() => {
                setFilter(type);
                setItemsToShow(6);
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Professional Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#11181C] rounded-2xl shadow-lg border border-[#F8F9FA]/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#34B27B]/10 hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
              }}
            >
              {/* Professional Image Container */}
              <div className="relative overflow-hidden h-48 bg-black">
                <img
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Professional Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#34B27B]/20 text-[#34B27B] text-xs font-bold rounded-lg shadow-md border border-[#34B27B]/30">
                    {project.type}
                  </span>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#11181C] rounded-lg flex items-center justify-center text-[#34B27B] hover:bg-[#34B27B] hover:text-white transition-all duration-300 shadow-lg"
                    aria-label="View project"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

                {/* Technology Tags */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  {project.tags?.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#11181C]/95 text-[#34B27B] text-xs font-semibold rounded-md shadow-sm border border-[#34B27B]/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Content */}
              <div className="p-5">
                {/* Project Title */}
                <h3 className="text-lg font-bold text-[#F8F9FA] mb-1.5 group-hover:text-[#34B27B] transition-colors duration-300 line-clamp-1">
                  {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                </h3>

                {/* Project Description */}
                <p className="text-[#F8F9FA]/70 text-xs mb-4 line-clamp-2 leading-relaxed">
                  {project.description.split('|')[0].trim()}
                </p>

                {/* Professional CTA Button */}
                <a
                  href={project.html_url}
                  className="group/btn inline-flex items-center gap-2 text-[#34B27B] text-xs font-semibold hover:gap-3 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setItemsToShow(prev => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-sm rounded-lg font-semibold hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Load More Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        )}

        {/* Professional Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-[#11181C] rounded-2xl border border-[#F8F9FA]/10 shadow-sm">
            <div className="text-4xl mb-3 opacity-50">🔍</div>
            <h3 className="text-lg font-semibold text-[#F8F9FA] mb-1.5">No projects found</h3>
            <p className="text-[#F8F9FA]/70 text-xs">Please select a different category to view more projects.</p>
          </div>
        )}

        {/* Professional CTA Section */}
        <div className="text-center mt-10 pt-8 border-t border-[#F8F9FA]/10">
          <p className="text-[#F8F9FA]/70 text-xs mb-3 font-medium">Interested in collaborating?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/nimeshdilhara96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#34B27B] text-white text-sm rounded-lg font-semibold hover:shadow-xl hover:shadow-[#34B27B]/30 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaGithub className="text-base" />
              <span>View on GitHub</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#11181C] border-2 border-[#34B27B]/50 text-[#34B27B] text-sm rounded-lg font-semibold hover:bg-[#34B27B] hover:text-white hover:border-[#34B27B] transition-all duration-300"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;