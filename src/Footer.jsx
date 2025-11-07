import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Julian.dev. Todos os direitos reservados.</p>
      {/* Futuramente, ícones de redes sociais podem ser adicionados aqui */}
    </footer>
  );
};

export default Footer;