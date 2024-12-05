// Hero.js
import React from 'react';
import '../Styles/Hero.css';
import Ranjeyan from '../assets/profile-pic.jpg';
import Logo from '../assets/R.png';
import ProjectImage2 from '../assets/euro.svg';
import Links from './Links';
import Project from './Project';
import Skills from './Skills'; // Import the Skills component

function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={Ranjeyan} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1 className="name">Ranjeyan Ariputhiran</h1>
          <p className="role">Mobile Application Developer(Intern)</p>
          <p className="link">
            <a href="mailto:amranjeyan03@gmail.com">amranjeyan03@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="about">
          <h2>About</h2>
          <p>
          Hey👋I am an MSc Data Science student and a Mobile App Developer Intern at Satyukt Analytics. 
          With expertise in data-driven solutions and app development, I thrive at the intersection of technology and innovation, creating impactful applications
           to address real-world challenges.</p>
        </div>

        {/* Skills Section */}
        <Skills />

        <div className="projects">
          <h2>Projects</h2>
          <Project
            year="2024"
            image={Logo}
            title="Portfolio Website"
            description="A personal portfolio website to showcase my skills and projects."
            tools={['React', 'CSS', 'Javascript']}
            link="https://github.com/Ranjeyan/Portfolio"
          />

          <Project
            year="2024"
            image={ProjectImage2}
            title="Euro 2024 Insights"
            description="This project aims to leverage Power BI for comprehensive analysis of Euro 2024 football tournament data. The goal is to provide actionable insights and visualizations that can help in understanding team performances, player statistics, match outcomes, and tournament trends."
            tools={['PowerBI']}
            link="/demo"
          />
        </div>
        <Links />
      </div>
    </div>
  );
}

export default Hero;
