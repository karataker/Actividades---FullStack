import React from 'react';
import '../styles/header.css';
import imagenLibroFooter from '../img/libro.png';


const Header = () => {
  return (
    <header className="header">
      <img src={imagenLibroFooter} alt="Book" className="header-book-image" />
      <h1>Relatos de Papel</h1>
    </header>
  );
};

export default Header;