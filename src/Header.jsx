import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
      <div className="header-content"> {/* Novo wrapper para centralizar o conteúdo */}
        <div className="logo">
          <a href="#about">JD</a>
        </div>
        <nav className="navbar">
          <div className="menu-hamburguer" onClick={toggleMenu}>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
          </div>
          <ul className={`nav-links ${menuAberto ? 'ativo' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About-me</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#language" onClick={toggleMenu}>Skills</a></li>
            
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;