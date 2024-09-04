import React, { useState } from 'react';
import '../Styles/FloatingButton.css';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-container">
      <button className="floating-button" onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className="floating-menu">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
