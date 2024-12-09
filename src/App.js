import React from 'react';
import './App.css';
import foto_personal from './imagen/foto.jpg';
function Curriculum() {
  return (
  <div className="curriculum-container">
  <div className="header">
    <h1>Jhon Edward Arequipa Manchego</h1>
    <h2>Desarrollador de Software</h2>
    <p>Apasionado por la tecnología y el desarrollo de soluciones innovadoras. Con experiencia en la creación de aplicaciones y sistemas eficientes.</p>
  </div>
  
  <div className="contact-info">
    <p><strong>Email:</strong> jhonedu626@gmail.com</p>
    <p><strong>Teléfono:</strong> 69438754</p>
    <p><strong>Nivel de Inglés:</strong> C1</p>
    <p><strong>Redes Sociales:</strong></p>
    <ul>
      <li><a href="https://www.linkedin.com/in/jhonarequipa">LinkedIn</a></li>
      <li><a href="https://github.com/JEAM24-BOT">GitHub</a></li>
    </ul>
  </div>
  
  <div className="hobbies">
    <h3>Hobbies</h3>
    <ul>
      <li>Videojuegos</li>
      <li>Ciclismo</li>
      <li>Leer sobre nuevas tecnologías</li>
      <li>Series de tv</li>
    </ul>
  </div>
  
  <div className="skills">
    <h3>Habilidades</h3>
    <ul>
      <li>Programación en Python, JavaScript, Java</li>
      <li>Desarrollo web (React, Node.js)</li>
      <li>Base de datos (MySQL, MongoDB)</li>
      <li>Control de versiones (Git, GitHub)</li>
      <li>Metodologías ágiles (Scrum, Kanban)</li>
    </ul>
  </div>
  
  <div className="education">
    <h3>Educación</h3>
    <p><strong>TS. Sistemas Informaticos</strong> - TECBA</p>
  </div>
  
  <div className="experience">
    <h3>Experiencia</h3>
    <ul>
      <li><strong>Practicante de Desarrollo Web</strong></li>
    </ul>
  </div>
</div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={foto_personal} alt="Mi foto" className="profile-photo" />
        <Curriculum />
      </header>
    </div>
  );
}

export default App;