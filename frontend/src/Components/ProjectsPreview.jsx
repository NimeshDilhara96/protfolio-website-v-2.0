import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from './Projects';

export default function ProjectsPreview() {
  // Get top 3 projects to showcase on the home page
  const topProjects = projects.slice(0, 3); 

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0a0f12] relative overflow-hidden border-t border-[#F8F9FA]/5">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-[#34B27B]/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-[#34B27B]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#34B27B]/10 border border-[#34B27B]/20 text-[#34B27B] text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34B27B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34B27B]"></span>
              </span>
              Featured Work
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Crafting Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34B27B] to-emerald-300">
                Experiences
              </span>
            </h2>
            <p className="text-lg text-[#F8F9FA]/70 leading-relaxed max-w-xl">
              Showcasing my top projects, including enterprise-grade SaaS platforms, AI-integrated solutions, and robust full-stack applications.
            </p>
          </div>
          
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-3 px-6 py-3 bg-[#11181C] border border-[#34B27B]/30 text-white font-medium rounded-xl hover:bg-[#34B27B] hover:border-[#34B27B] transition-all duration-300 group hover:shadow-[0_0_20px_rgb(52,178,123,0.3)]"
          >
            <span>View Complete Portfolio</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-[#34B27B] group-hover:text-white" />
          </Link>
        </div>

        {/* Top Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-[#11181C]/60 backdrop-blur-xl rounded-2xl border border-[#F8F9FA]/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgb(52,178,123,0.15)] hover:border-[#34B27B]/40"
              style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.15}s both` }}
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden h-40 md:h-48 bg-black shrink-0">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#11181C] to-black">
                    <span className="text-[#34B27B]/40 text-4xl font-bold">
                      {project.name.split(/[-_ ]/).map(w => w[0]).slice(0, 2).join("").toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11181C] via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Typography Content Container */}
              <div className="flex flex-col flex-grow p-4 md:p-6 lg:p-8">
                {/* Header: Badges & Title */}
                <div className="mb-3 md:mb-5">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="px-2 py-0.5 md:px-3 md:py-1 bg-[#34B27B]/10 text-[#34B27B] text-[10px] md:text-xs font-bold rounded-lg border border-[#34B27B]/20">
                      {project.type}
                    </span>
                    {project.live_url && (
                      <span className="inline-flex items-center gap-1 md:gap-1.5 px-2 py-0.5 md:px-3 md:py-1 bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold rounded-lg border border-emerald-500/20">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#34B27B] transition-colors duration-300 leading-tight">
                    {project.name.replace(/-/g, " ").replace(/_/g, " ")}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-[#F8F9FA]/60 text-sm mb-4 md:mb-8 leading-relaxed flex-grow">
                  {project.description.split("|")[0].trim()}
                </p>
                
                {/* Footer: Tags & Action Links */}
                <div className="flex flex-col gap-4 md:gap-5 mt-auto pt-4 md:pt-5 border-t border-white/5">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="px-2 py-1 md:px-3 md:py-1.5 bg-black/40 text-white/80 text-[10px] md:text-xs font-medium rounded-md border border-white/10 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-3 md:gap-4 justify-end mt-1 md:mt-2">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 md:gap-2 text-[13px] md:text-sm font-semibold text-[#34B27B] hover:text-emerald-400 transition-colors group/link"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="text-[10px] md:text-xs group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 text-[13px] md:text-sm font-medium text-white/60 hover:text-white transition-colors group/link ml-1 md:ml-2"
                    >
                      <span>{project.live_url ? "Source Code" : "View Details"}</span>
                      <FaGithub className="text-base md:text-lg group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#34B27B] text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgb(52,178,123,0.4)] transition-all duration-300 w-full justify-center"
          >
            <span>View Complete Portfolio</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
