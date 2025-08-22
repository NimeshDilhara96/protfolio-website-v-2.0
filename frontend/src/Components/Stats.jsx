import React from 'react';
import { FaBriefcase, FaUserTie, FaUsers } from 'react-icons/fa';
import './style.css';

function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="container stats-container">
        <div className="stat-card">
          <div className="stat-icon"><FaBriefcase /></div>
          <div className="stat-value">10+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaUserTie /></div>
          <div className="stat-value">2+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaUsers /></div>
          <div className="stat-value">5+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
      </div>
    </section>
  );
}

export default Stats;