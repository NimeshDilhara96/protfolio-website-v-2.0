import React, { useState, useTransition, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Button from "./common/Button";
import nextgenCover from "../assets/nextgensport club project cover.webp";
import nutricoreCover from "../assets/Nutricare cover.webp";
import ucareCover from "../assets/ucare project cover.webp";
import aiPromptCover from "../assets/Ai_Promptgallery.webp";
import nutricaremobilecover from "../assets/nutricaremobilecover.webp";
import personalprotfoliyo from "../assets/personalprotfoliyo.webp";
import erpcover from "../assets/erp.webp";

// Add a "type" property for filtering
export const projects = [
  {
    name: "NextGen-Sport-Club-Management-System",
    type: "Web App",
    description:
      "NextGen Sports Club is an AI-powered full-stack MERN application designed to modernize sports club operations with smart booking, QR-based access, AI-generated training & meal plans, e-commerce, real-time messaging, and automated email notifications.",
    html_url: "https://github.com/NimeshDilhara96/NextgensportclubSystem",
    image: nextgenCover,
    tags: ["React", "Node.js", "MongoDB", "AI", "MERN"],
  },
  {
    name: "Multi-Tenant SaaS Erp System",
    type: "Web App",
    description:
      "A multi-tenant SaaS ERP system designed to streamline business operations across various industries. It offers modules for inventory management, accounting, HR, and customer relationship management, all accessible through a unified platform.",
    html_url: "https://github.com/NimeshDilhara96/website-tracking-system",
    live_url: "https://mommentx.space/erp",
    image: erpcover,
    tags: ["SaaS", "ERP", "Multi-tenant"],
  },
  {
    name: "Smartmap Pro",
    type: "Web App",
    description:
      "SmartMap Pro is a plug-and-play, highly customizable NPM package that lets you build commercial routing maps in minutes.",
    live_url: "https://momentix.gumroad.com/l/smartmap-pro",
    image: "https://public-files.gumroad.com/05t1o3x7abs0v4sqozb0ru60ts84",
    tags: ["React", "Leaflet", "OSRM", "NPM"],
  },
  {
    name: "U-CARE Hospital Consultation Mobile UI Design",
    type: "UI/UX",
    description:
      "A modern and user-friendly mobile UI design for hospital consultation, created in Figma. View the full project and design details on Behance.",
    html_url:
      "https://www.behance.net/gallery/219353335/U-CARE-Hospital-Consultation-Mobile-UI-Design%28Figma%29",
    image: ucareCover,
    tags: ["Figma", "UI/UX", "Mobile"],
  },
  {
    name: "AI Prompt Gallery",
    type: "Web App",
    description:
      "A web application that allows users to explore, create, and share AI-generated prompts for various applications, fostering creativity and collaboration in the AI community.",
    html_url: "https://github.com/NimeshDilhara96/Ai-Prompt-Gallery",
    live_url: "https://aiprompts.mommentx.space",
    image: aiPromptCover,
    tags: ["AI", "React", "Community"],
  },
  {
    name: "Nutricare-Meal_Management_System",
    type: "Web App",
    description:
      "Nutricare is a personalized meal planning and health management system designed to cater to individual dietary needs and health conditions. It empowers users to lead healthier lifestyles with customized meal plans, health insights, and expert consultations.",
    html_url:
      "https://github.com/NimeshDilhara96/Nutricare-Meal_Management_System",
    image: nutricoreCover,
    tags: ["PHP", "Health", "API"],
  },
  {
    name: "Hrm-system",
    type: "Web App",
    description:
      "A comprehensive Human Resource Management (HRM) system designed to streamline HR processes, including employee management, payroll, attendance tracking, and performance evaluation.",
    html_url: "https://github.com/NimeshDilhara96/hrm-system",
    image: null,
    tags: ["HRM", "Web App", "Employee Management", "Nextjs", "Typescript"],
  },
  {
    name: "Nutricare Mobile Application UI Design",
    type: "UI/UX",
    description:
      "A sleek and intuitive mobile application UI design for Nutricare, focused on personalized meal management and health tracking. Explore the full design project on Behance.",
    html_url: "#",
    image: nutricaremobilecover,
    tags: ["Figma", "UI/UX", "Mobile"],
  },
  {
    name: "Personal Portfolio Website",
    type: "Web App",
    description:
      "A personal portfolio website showcasing projects, skills, and experience, built with React and Tailwind CSS for a modern and responsive design.",
    html_url: "https://github.com/NimeshDilhara96/protfolio-website-v-2.0",
    image: personalprotfoliyo,
    tags: ["React", "Tailwind CSS", "Portfolio"],
  },
];

// Get unique types for filter buttons
const types = ["All", ...Array.from(new Set(projects.map((p) => p.type)))];

// Memoized ProjectCard component to isolate re-renders
const ProjectCard = React.memo(({ project, idx }) => (
  <div
    className="group flex flex-col bg-surface/80 backdrop-blur-xl rounded-2xl shadow-lg border border-border-subtle overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-border-medium hover:-translate-y-2 theme-card-glow"
    style={{
      animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
    }}
  >
    {/* Professional Image Container */}
    <div className="relative overflow-hidden h-40 md:h-48 bg-background shrink-0">
      {project.image ? (
        <img
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
          src={project.image}
          alt={project.name}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-background">
          <span className="text-accent/40 text-4xl font-bold">
            {project.name
              .split(/[-_ ]/)
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </span>
        </div>
      )}
    </div>

    {/* Typography Content Container */}
    <div className="flex flex-col flex-grow p-4 md:p-6 lg:p-8">
      {/* Header: Badges & Title */}
      <div className="mb-3 md:mb-5">
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
          <span className="px-2 py-0.5 md:px-3 md:py-1 bg-accent/10 text-accent text-[10px] md:text-xs font-bold rounded-lg border border-accent/20">
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
        <h3 className="text-lg md:text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
          {project.name.replace(/-/g, " ").replace(/_/g, " ")}
        </h3>
      </div>

      {/* Project Description */}
      <p className="text-text-primary/70 text-sm mb-4 md:mb-8 leading-relaxed flex-grow">
        {project.description.split("|")[0].trim()}
      </p>

      {/* Footer: Tags & Action Links */}
      <div className="flex flex-col gap-4 md:gap-5 mt-auto pt-4 md:pt-5 border-t border-text-primary/5">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 md:px-3 md:py-1.5 bg-surface text-text-muted text-[10px] md:text-xs font-semibold rounded-md border border-border-subtle shadow-sm"
            >
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
              className="flex items-center gap-1.5 md:gap-2 text-[13px] md:text-sm font-semibold text-accent hover:text-emerald-400 transition-colors group/link"
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt className="text-[10px] md:text-xs group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          )}
          {project.html_url && (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:gap-2 text-[13px] md:text-sm font-medium text-text-primary/60 hover:text-text-primary transition-colors group/link ml-1 md:ml-2"
            >
              <span>{project.live_url ? "Source Code" : "View Details"}</span>
              <FaGithub className="text-base md:text-lg group-hover/link:scale-110 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = "ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [isPending, startTransition] = useTransition();
  const [lastClickTime, setLastClickTime] = useState(0);

  // Memoized filter calculation to prevent recalculation on re-renders
  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? projects
      : projects.filter((p) => p.type === filter);
  }, [filter]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Memoized visible projects slice
  const visibleProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage]);

  // Debounced filter handler with useTransition for non-blocking updates
  const handleFilterClick = useCallback(
    (type) => {
      const now = Date.now();
      // Debounce: prevent updates within 100ms of last click
      if (now - lastClickTime < 100) return;
      setLastClickTime(now);

      // Mark as non-urgent so UI stays responsive during re-filter
      startTransition(() => {
        setFilter(type);
        setCurrentPage(1);
      });
    },
    [lastClickTime],
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top of projects section
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-16 bg-gradient-to-b from-background to-surface relative overflow-hidden"
    >
      <Helmet>
        <title>
          Projects | Nimesh Dilhara Kulasooriya — Full-Stack Developer
        </title>
        <meta
          name="description"
          content="Explore React, MERN stack & AI-powered projects by Nimesh Dilhara. Includes Nutricare, NextGen Sports Club, UCare and more full-stack web applications."
        />
        <link
          rel="canonical"
          href="https://nimeshdilhara.vercel.app/projects"
        />
      </Helmet>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl theme-bg-glow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl theme-bg-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-primary/80 text-sm md:text-base max-w-2xl mx-auto mt-3">
            Delivering exceptional digital solutions with modern technology and
            design excellence
          </p>
        </div>

        {/* Professional Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {types.map((type) => (
            <Button
              key={type}
              variant={filter === type ? "primary" : "outline"}
              size="sm"
              className={isPending ? "opacity-70 cursor-wait" : ""}
              onClick={() => handleFilterClick(type)}
              disabled={isPending}
              aria-current={filter === type ? "true" : "false"}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Professional Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ${isPending ? "opacity-60" : ""}`}
        >
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} idx={idx} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || isPending}
              className="w-10 h-10 p-0 rounded-xl flex items-center justify-center"
              aria-label="Previous Page"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              }
            />

            <div className="flex items-center gap-2 px-2">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "primary" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    disabled={isPending}
                    className="w-10 h-10 p-0 rounded-xl flex items-center justify-center"
                  >
                    {page}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || isPending}
              className="w-10 h-10 p-0 rounded-xl flex items-center justify-center"
              aria-label="Next Page"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              }
            />
          </div>
        )}

        {/* Professional Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-surface rounded-2xl border border-border-subtle shadow-sm">
            <div className="text-4xl mb-3 opacity-50">🔍</div>
            <h3 className="text-lg font-semibold text-text-primary mb-1.5">
              No projects found
            </h3>
            <p className="text-text-primary/70 text-xs">
              Please select a different category to view more projects.
            </p>
          </div>
        )}

        {/* Professional CTA Section */}
        <div className="text-center mt-10 pt-8 border-t border-border-subtle">
          <p className="text-text-primary/70 text-xs mb-3 font-medium">
            Interested in collaborating?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/nimeshdilhara96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 btn-primary border-transparent text-sm rounded-lg font-semibold hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaGithub className="text-base" />
              <span>View on GitHub</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 bg-surface border-2 border-accent/50 text-accent text-sm rounded-lg font-semibold hover:bg-accent hover:text-text-primary hover:border-accent transition-all duration-300"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
