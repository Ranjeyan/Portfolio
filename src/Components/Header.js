import React from 'react';
import '../Styles/Header.css'; 
import Logo from '../assets/R.png';
import Resume from '../assets/Ranjeyan_Resume.pdf'; 

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />

      <a href={Resume} className="button" download="Resume.pdf">
        <span className="button-text">Resume</span>
        <span className="arrow">↗</span>
      </a>
    </header>
  );
}

export default Header;
