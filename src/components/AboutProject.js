import React from 'react';
import './AboutProject.css';
import projectImage from '../assets/project-image.jpeg';

const AboutProject = () => {
  return (
    <section id="project" className="about-project-section">
      <div className="container">
        <div className="text-content">
          <h1>
            Drone Inspection: <span className="highlight">Automated & Precise</span>
          </h1>
          <p>
            This project utilizes state-of-the-art drone technology combined with a powerful AI model, 
            YOLOv8, to automate the inspection of building facades. Our system can autonomously 
            detect, classify, and report surface cracks, significantly reducing inspection time and improving accuracy.
          </p>
        </div>
        <div className="image-content">
          <img src={projectImage} alt="Automated drone inspection process" />
        </div>
      </div>
    </section>
  );
};

export default AboutProject;