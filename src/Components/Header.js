import React from 'react';
import '../Styles/Header.css'; 
import Logo from '../assets/R.png';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />

      <a href="mailto:ranjeyanari03@gmail.com" className="button">
        <span className="button-text">Contact</span>
        <span className="arrow">↗</span>
      </a>
    </header>
  );
}

export default Header;
