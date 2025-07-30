import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hi, I'm Arjunan M</h1>
        <p>Python / Django / React Developer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I’m a passionate full-stack developer skilled in Python, Django, React.js, and MySQL.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Online Voting System</h3>
          <p>Django app for college elections with real-time tracking.</p>
        </div>
        <div className="project-card">
          <h3>Organ Donation System</h3>
          <p>Role-based Django app for managing organ donation.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: arjunan@example.com</p>
        <p>GitHub: <a href="https://github.com/your-username">your-username</a></p>
      </section>

      <footer>
        <p>© 2025 Arjunan M</p>
      </footer>
    </div>
  );
}

export default App;
