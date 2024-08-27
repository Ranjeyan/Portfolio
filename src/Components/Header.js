import React from 'react';
import '../Styles/Header.css'; 
import Logo from '../assets/R.png'

function Header() {
  return (
    <header className="header">
      {/* Logo on the Left */}
      <img src={Logo} alt="Logo" className="logo" />

      {/* Button on the Right */}
      <button className="button">
        Contact
        <i className='fas fa-arrow-up'></i>
      </button>
    </header>
  );
}

export default Header;
