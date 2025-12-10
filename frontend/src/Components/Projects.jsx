import React, { useState } from 'react';

// Add a "type" property for filtering
const projects = [
  {
    "name": "NextGen-Sport-Club-Management-System",
    "type": "Web App",
    "description": "NextGen Sports Club is an AI-powered full-stack MERN application designed to modernize sports club operations with smart booking, QR-based access, AI-generated training & meal plans, e-commerce, real-time messaging, and automated email notifications.",
    "html_url": "https://github.com/NimeshDilhara96/NextgensportclubSystem",
    "image": "https://opengraph.githubassets.com/1/NimeshDilhara96/NextgensportclubSystem"
  },
  {
    "name": "Nutricare-Meal_Management_System",
    "type": "Web App",
    "description": "Nutricare is a personalized meal planning and health management system designed to cater to individual dietary needs and health conditions. It empowers users to lead healthier lifestyles with customized meal plans, health insights, and expert consultations.",
    "html_url": "https://github.com/NimeshDilhara96/Nutricare-Meal_Management_System",
    "image": "https://opengraph.githubassets.com/1/NimeshDilhara96/Nutricare-Meal_Management_System"
  },
  {
    "name": "U-CARE Hospital Consultation Mobile UI Design",
    "type": "UI/UX",
    "description": "A modern and user-friendly mobile UI design for hospital consultation, created in Figma. View the full project and design details on Behance.",
    "html_url": "https://www.behance.net/gallery/219353335/U-CARE-Hospital-Consultation-Mobile-UI-Design%28Figma%29",
    "image": "https://media.licdn.com/dms/image/v2/D4E22AQFHlJhnqs5UEw/feedshare-shrink_2048_1536/B4EZVsJEkKHgAo-/0/1741276074223?e=1758153600&v=beta&t=kgQYVfhapTiNuSY0ID7Xtj-bHq43D6afl6HGfGqrSp0"
  },
  {
    "name": "Ai Promt Gallery",
    "type": "Web App",
    "description": "Live Demo: https://mometec.codes/Ai-Prompt-Gallery/  |  A web application that allows users to explore, create, and share AI-generated prompts for various applications, fostering creativity and collaboration in the AI community.",
    "html_url": "https://www.mometec.codes",
    "image": "https://share.google/images/4DMsrSsXBZoNqNyGP"
  }
];

// Get unique types for filter buttons
const types = ["All", ...Array.from(new Set(projects.map(p => p.type)))];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[var(--accent-pink)]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4 tracking-tight">
            🚀 Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--accent-pink)] mx-auto rounded-full"></div>
          <p className="text-[var(--gray)] text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my latest work, featuring modern web applications and creative designs
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {types.map(type => (
            <button
              key={type}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                filter === type
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-lg shadow-[var(--primary)]/25'
                  : 'bg-zinc-900 backdrop-blur-sm text-[var(--gray)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] border border-white/20'
              }`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-cyan-950 backdrop-blur-sm rounded-2xl shadow-lg shadow-[var(--primary)]/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:scale-105 hover:-translate-y-2 border border-white/20"
              style={{
                animationDelay: `${idx * 150}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project type badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--primary)] text-xs font-semibold rounded-full border border-white/20">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-[var(--dark)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2">
                  {project.name.replace(/-/g, ' ')}
                </h3>

                {/* Project Description */}
                <p className="text-[var(--gray)] text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.html_url}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-sm font-medium rounded-xl shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:scale-105 transition-all duration-300 group/btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[var(--dark)] mb-2">No projects found</h3>
            <p className="text-[var(--gray)]">Try selecting a different filter to see more projects.</p>
          </div>
        )}

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-[var(--accent-pink)] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;