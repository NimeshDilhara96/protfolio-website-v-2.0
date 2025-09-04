import React from 'react';
import './style.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <img src="https://avatars.githubusercontent.com/u/170844891?v=4" alt="Nimesh Dilhara" />
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>
            Hi! I'm <strong>Nimesh Dilhara Kulasooriya </strong>, a passionate <strong>BSc (Hons) Software Engineering</strong> undergraduate with a strong interest in building modern, user-friendly web applications.<br />
            My expertise spans full-stack development, AI, and UI/UX design. I thrive on solving real-world problems, exploring new technologies, and collaborating on innovative projects that make an impact.
          </p>
          <br />
          <ul className="about-list">
            <li><i className="fas fa-code"></i> Full-Stack Web Development</li>
            <li><i className="fas fa-brain"></i> Artificial Intelligence Enthusiast.</li>
            <li><i className="fas fa-paint-brush"></i> UI/UX Design</li>
            <li><i className="fas fa-users"></i> Team Player & Mentor</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;