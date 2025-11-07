import React from 'react';
import './AboutMe.css';
{/*import imagemUm from './img/one.jpg';*/}
import imagemDois from './img/two.jpg';
const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <h2>Sobre Mim</h2>
      <p>
        Olá! Sou Julian, um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam por trás das telas, e desde então, tenho me dedicado a transformar ideias em realidade através do código.
      </p>
      <p>
        Com experiência em desenvolvimento web, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades para entregar produtos de alta qualidade. Adoro desafios e a oportunidade de colaborar em projetos que impactam positivamente as pessoas.
      </p>

      <div className="about-me-cards">
        <div className="about-me-card">
          <img src={imagemDois} alt="Julian" />
        </div>
        {/* <div className="about-me-card">
          <img src={imagemDois} alt="Outra Imagem" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;