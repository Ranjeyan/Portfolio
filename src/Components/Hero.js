import React from 'react';
import '../Styles/Hero.css'; 
import Ranjeyan from '../assets/Ranjeyan.jpg'; // Adjust path if needed

function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={Ranjeyan} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1 className="name">Ranjeyan</h1>
          <p className="role">Datalyst</p>
        </div>
      </div>
      <div className="about">
        <h2>About Me</h2>
        <p>
          Poised to create a impact in the field of data science
        </p>
      </div>
      
      {/* Project Section */}
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website to showcase my skills and projects. Built with React, it features a responsive design and interactive elements to enhance user experience.
          </p>
        </div>
        <div className="project-item">
          <h3>Euro 2024 Insights</h3>
          <p>
            A mobile application for a bakery that allows customers to place orders online. Developed using Flutter, with Firebase as the backend for managing orders and inventory.
          </p>
        </div>
        <div className="project-item">
          <h3>ThreatSeeker</h3>
          <p>
            A cybersecurity project focused on detecting various security threats using machine learning algorithms. Implemented using Python and a range of ML techniques.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
