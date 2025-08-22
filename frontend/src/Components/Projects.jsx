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
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-filter">
        {types.map(type => (
          <button
            key={type}
            className={`filter-btn${filter === type ? " active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="projects-grid modern">
        {filteredProjects.map((project, idx) => (
          <div className="project-card modern" key={idx}>
            <div className="project-image-wrap">
              <img
                className="project-image"
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <span className="project-type">{project.type}</span>
              <p className="project-desc">{project.description}</p>
              <a
                href={project.html_url}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;