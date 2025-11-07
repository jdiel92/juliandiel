import React from 'react';
import './Projects.css';



const projectsData = [
  {
    id: 1,
    title: 'Landing Page Imobiliária',
    image: 'https://media.brainly.com.br/image/rs:fill/w:1920/q:75/plain/https://pt-static.z-dn.net/files/d09/6240e1845b13a9530ebd78484df6e3a5.jpg',
    link: 'https://github.com/jdiel92/Landing-Im-vel-JD', // Substitua pelo seu link real
    description: 'Criação landing page para imobiliária utilizando React.js e CSS Modules.'
  },
  {
    id: 2,
    title: 'Portfólio Profissional',
    image: 'https://media.licdn.com/dms/image/v2/C5612AQEbYeMZA6vX4w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520107125813?e=2147483647&v=beta&t=YHTkdwQKtDPWhCRdRQYf6xdK7c0qNBHRMcvA9Yf91b8',
    link: 'https://github.com/jdiel92/juliandiel', // Substitua pelo seu link real
    description: 'Criação Portfólio profissional utilizando React.js e Node.JS para backend.'
  },
  {
    id: 3,
    title: 'Construção...',
    image: 'https://www.webmaxsolutions.com.br/src/site/dsv/images/construcao.jpg',
    link: 'https://github.com/jdiel92', // Substitua pelo seu link real
    description: 'loren ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 4,
    title: 'Construção...',
    image: 'https://www.webmaxsolutions.com.br/src/site/dsv/images/construcao.jpg',
    link: 'https://github.com/jdiel92', // Substitua pelo seu link real
    description: 'loren ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 5,
    title: 'Construção...',
    image: 'https://www.webmaxsolutions.com.br/src/site/dsv/images/construcao.jpg',
    link: 'https://github.com/jdiel92', // Substitua pelo seu link real
    description: 'loren ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 6,
    title: 'Construção...',
    image: 'https://www.webmaxsolutions.com.br/src/site/dsv/images/construcao.jpg',
    link: 'https://github.com/jdiel92', // Substitua pelo seu link real
    description: 'loren ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
