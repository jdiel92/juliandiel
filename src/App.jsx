import React from 'react';
import Header from './Header'; // Caminho corrigido
import MatrixBackground from './MatrixBackground'; // Caminho corrigido
import AboutMe from './AboutMe'; // Caminho corrigido
import Projects from './Projects'; // Caminho corrigido
import LanguageSkills from './LanguageSkills'; // Caminho corrigido
import ContactForm from './ContactForm'; // Caminho corrigido
import Footer from './Footer'; // Importando o componente Footer
import './App.css';

function App() {
  return (
    <div className="App-container">
      <MatrixBackground />
      <Header /> {/* O Header agora está fora do App-content para ocupar 100% da largura */}

      <div className="App-content">
        <main>
          <AboutMe />
          <Projects />
          <LanguageSkills />
          <ContactForm />
        </main>

        <Footer /> {/* Renderizando o componente Footer */}
      </div>
    </div>
  );
}

export default App;
