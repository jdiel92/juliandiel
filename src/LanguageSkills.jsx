import React from 'react';
import './LanguageSkills.css';


// Usando divs simples como placeholders para ícones de linguagens
// Em um projeto real, você usaria SVGs, imagens ou uma biblioteca de ícones (ex: Font Awesome)
const languages = [
  { name: 'HTML5', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> },
  { name: 'CSS3', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /> },
  { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> },
  { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> },
  { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> }, 
  { name: 'GitHub', icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cmmOu4xUkNNZlk-qh4r47i9n6R1mLQD-3Q&s" alt="Github" /> },
  { name: 'Git', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/480px-Git_icon.svg.png" alt="Git" /> },
  { name: 'Figma', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma" /> },  
  
];




const LanguageSkills = () => {
  return (
    <section id="language" className="language-skills">
      <h2>Skills</h2>
      <div className="language-icons">
        {languages.map((lang) => (
          <div key={lang.name} className="language-item"> {/* Usar lang.name como key é mais robusto */}
            <span className="language-icon">{lang.icon}</span>
            <p>{lang.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



export default LanguageSkills;
