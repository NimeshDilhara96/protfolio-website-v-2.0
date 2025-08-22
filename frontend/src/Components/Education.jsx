import React from 'react';
import './style.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-card">
            <div className="education-logo">
              <img
                src="https://esu.lk/_next/image?url=%2Fimages%2Flogo%2Fesu-header.png&w=256&q=75"
                alt="ESOFT Metro Campus Logo"
              />
            </div>
            <div className="education-details">
              <h3 className="education-institute">ESOFT Metro Campus</h3>
              <div className="education-degree">
                Bachelor of Information (Honours) Degree, Information Technology
              </div>
              <div className="education-duration">Oct 2022 - Dec 2026</div>
            </div>
          </div>
          <div className="education-card">
            <div className="education-logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXXEvlKCNAX5FjO2CprQhrgJqldsZBHUv-Q&s"
                alt="K/galigamuwa Central College Logo"
              />
            </div>
            <div className="education-details">
              <h3 className="education-institute">K/Galigamuwa Central College</h3>
              <div className="education-degree">Advanced Level, Technology</div>
              <div className="education-duration">2018 - 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;