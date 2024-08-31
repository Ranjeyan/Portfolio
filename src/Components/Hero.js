import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/Hero.css';
import Ranjeyan from '../assets/Ranjeyan.jpg';
import Logo from '../assets/R.png';
import ProjectImage2 from '../assets/euro.svg';
import Links from './Links';

function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={Ranjeyan} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1 className="name">Ranjeyan Ariputhiran</h1>
          <p className="role">M.Sc., Data Science</p>
          <p className="link">Datalyst</p>
        </div>
      </div>
      
      <div className="content-wrapper">
        <div className="about">
          <h2>About</h2>
          <p>
            Hi! I am Ranjeyan. I am a Data Science scholar.
          </p>
        </div>
        
        <div className="projects">
          <h2>Projects</h2>
          
          <div className="project-item">
            <div className="project-left">
              <p className="project-year">2024</p>
            </div>
            <div className="project-right">
              <img src={Logo} alt="Project" className="project-image" />
              <div className="project-details">
                <h3>
                  <a 
                    href="https://github.com/Ranjeyan/Portfolio" 
                    className="project-title-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="project-title-text">Portfolio Website</span>
                  </a>
                  <span className="arrow">↗</span>
                </h3>
                <p className="project-description">
                  A personal portfolio website to showcase my skills and projects.
                </p>
                <p className="project-tools">
                  React <span className="tool-dot">·</span> CSS <span className="tool-dot">·</span> Javascript
                </p>
              </div>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-left">
              <p className="project-year">2024</p>
            </div>
            <div className="project-right">
              <img src={ProjectImage2} alt="Project" className="project-image" />
              <div className="project-details">
                <h3>
                  <Link to="/demo" className="project-title-link">
                    <span className="project-title-text">Euro 2024 Insights</span>
                  </Link>
                  <span className="arrow">↗</span>
                </h3>
                <p className="project-description">
                This project aims to leverage Power BI for comprehensive analysis of Euro 2024 football tournament
                data. The goal is to provide actionable insights and visualizations that can help in understanding
                team performances, player statistics, match outcomes, and tournament trends.
                </p>
                <p className="project-tools">
                  PowerBI
                </p>
              </div>
            </div>
          </div>
        </div>
        <Links/>
      </div>
    </div>
  );
}

export default Hero;
