import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaBookOpen } from "react-icons/fa";
import { projects } from "./Projects";

export default function ProjectsPreview() {
  const flagship = projects[1];
  const moreProjects = [projects[0], ...projects.slice(2, 4)];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-background relative overflow-hidden border-t border-text-primary/5"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-accent/5 rounded-full blur-[120px] theme-bg-glow"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[100px] theme-bg-glow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Modern Flagship Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-subtle pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Featured Work
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
              Flagship <span className="text-highlight">Project</span>
            </h2>
          </div>
          <p className="text-text-primary/60 text-sm md:text-base max-w-sm md:text-right">
            The build I'm proudest of. A deep dive into complex problem solving and robust architecture.
          </p>
        </div>

        {/* Flagship Hero Card */}
        <div className="group relative flex flex-col lg:flex-row bg-surface/90 backdrop-blur-xl rounded-2xl border border-border-subtle overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-border-medium mb-16 mt-5 theme-card-glow">

          {/* Image */}
          <div className="lg:w-[45%] relative overflow-hidden h-64 sm:h-80 lg:h-auto bg-background shrink-0">
            {flagship.image ? (
              <img
                src={flagship.image}
                alt={flagship.name}
                className="w-full h-full object-contain object-center p-4 sm:p-6 brightness-[0.85] group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-background">
                <span className="text-accent/30 text-6xl font-bold">
                  {flagship.name.split(/[-_ ]/).map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                </span>
              </div>
            )}
            {flagship.live_url && (
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Live
              </span>
            )}
          </div>

          {/* Content */}
          <div className="lg:w-[55%] flex flex-col p-6 sm:p-8 lg:p-10">
            <span className="inline-block self-start px-3 py-1 bg-accent/15 text-accent text-xs font-bold rounded-lg border border-accent/25 mb-5">
              {flagship.type}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
              {flagship.name.replace(/-/g, " ").replace(/_/g, " ")}
            </h3>
            <p className="text-text-primary/70 text-base leading-relaxed mb-6 flex-grow">
              {flagship.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {flagship.tags?.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-surface text-text-muted text-xs font-semibold rounded-md border border-border-subtle">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              {flagship.live_url && (
                <a
                  href={flagship.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 btn-primary border-transparent text-sm font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Open live demo
                </a>
              )}
              <a
                href={flagship.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-accent text-sm font-bold rounded-lg border border-accent/40 hover:bg-accent/10 hover:border-accent transition-all"
              >
                <FaBookOpen className="text-xs" />
                Read case study
              </a>
            </div>
          </div>
        </div>

        {/* More Projects Label */}
        <p className="text-text-primary/60 text-sm font-bold uppercase tracking-widest mb-6">
          More projects
        </p>

        {/* More Projects Mini-Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {moreProjects.map((project, idx) => (
            <div
              key={project.name}
              className="group flex flex-col bg-surface/70 backdrop-blur-xl rounded-xl border border-border-subtle overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-border-medium theme-card-glow"
              style={{ animation: `fadeInUp 0.45s ease-out ${idx * 0.1}s both` }}
            >
              {/* Mini image */}
              <div className="relative overflow-hidden h-32 bg-background shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover brightness-[0.75] group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-surface">
                    <span className="text-accent/30 text-3xl font-bold">
                      {project.name.split(/[-_ ]/).map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                    </span>
                  </div>
                )}
                {project.live_url && (
                  <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/30">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                    Live
                  </span>
                )}
              </div>

              {/* Mini content */}
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors leading-tight mb-1.5">
                  {project.name.replace(/-/g, " ").replace(/_/g, " ")}
                </h3>
                <p className="text-text-primary/55 text-xs leading-relaxed flex-grow mb-3 line-clamp-2">
                  {project.description.split("|")[0].trim()}
                </p>

                {/* Mini tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags?.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-surface text-text-muted text-[10px] font-semibold rounded border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mini actions */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-accent hover:text-emerald-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-[9px]" />
                      Demo
                    </a>
                  )}
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-text-primary/50 hover:text-text-primary transition-colors ml-auto"
                  >
                    <FaGithub className="text-sm" />
                    {project.live_url ? "Code" : "Details"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Complete Portfolio Button */}
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface border border-border-subtle text-text-primary font-medium rounded-xl hover:bg-accent hover:border-accent transition-all duration-300 group hover:shadow-lg w-full sm:w-auto justify-center"
          >
            <span>View Complete Portfolio</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-accent group-hover:text-text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}

