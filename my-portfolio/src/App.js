import { useState } from 'react';
import './App.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';

const heroBackgroundImage = process.env.PUBLIC_URL + '/images/IMG_20250306_160225~3.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="bi bi-person" href="#hero"> ARJUNAN</a>
        </div>


        {/* Hamburger Button for mobile */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Toggleable Nav Items */}
        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          
        <div className="navbar-social">
          <a href="https://linkedin.com/in/arjunan-m-4b6556228" target="_blank" rel="noopener noreferrer"><i style={{ color: '#0077b5' }} className="fab fa-linkedin"></i></a>
          <a href="https://github.com/arjunan-IT" target="_blank" rel="noopener noreferrer"><i style={{ color: 'white' }} className="fab fa-github"></i></a>
          <a href="https://instagram.com/maha_mathi_arjun" target="_blank" rel="noopener noreferrer"><i style={{ color: 'purple' }} className="fab fa-instagram"></i></a>
          <a href="https://wa.me/917094335398" target="_blank" rel="noopener noreferrer">
            <i style={{ color: 'green' }} className="fab fa-whatsapp"></i></a>
        </div>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION</a></li>
          <li><a href="#certificate" onClick={() => setMenuOpen(false)}>CERTIFICATION</a></li>
        </ul>
      </nav>

      <section id="hero" style={{ backgroundImage: `url(${heroBackgroundImage})` }} className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">FOR INNOVATIVE WEB APPLICATIONS</p>
          <h1 style={{ color: 'orange' }} className="primary hero-title">PYTHON FULL-STACK<br />WEB DEVELOPER</h1>
          <p className="hero-name">Hi, I'm Arjunan</p>
          <a href="#about" className="hero-button">SEE MORE ABOUT ME</a>
        </div>
      </section>

      <main>
        <section id="about" className="content-section about-section">
          <h2>About Me</h2>
          <p>
            I'm an enthusiastic and detail-oriented Python Full-Stack Web Developer with a strong passion for building modern, user-friendly web applications.
            I specialize in Python, Django, React.js, HTML, CSS, JavaScript, and MySQL.
            I completed a Full Stack course and 6-month internship, gaining real-world experience in scalable web development.
            I enjoy turning complex problems into simple, elegant solutions.
          </p>
        </section>

        <section id="skills" className="content-section">
          <h2>Skills</h2>
          <ul>
            <li>Languages: Python 3.12, Java, SQL, HTML, CSS, JavaScript</li>
            <li>Frameworks: Django 5.2.4, React.js, Bootstrap</li>
            <li>Databases: MySQL, SQLite 3</li>
            <li>Tools/IDEs: PyCharm, VS Code, Eclipse, NetBeans, Git, Jupyter Notebook</li>
          </ul>
        </section>

        <section id="education" className="content-section">
          <h2>Education</h2>
          <ul>
            <li><strong>M.Sc Information Technology</strong>, Bishop Heber College (2023 - 2025), CGPA: 8.74</li>
            <li><strong>B.Voc Information Technology</strong>, Bishop Heber College (2019 - 2022), CGPA: 7.29</li>
            <li><strong>HSC</strong>, Sri Karunai Ragavaji Vidhyalaya Hr Sec School, 73%</li>
            <li><strong>SSLC</strong>, Bishop Heber Hr Sec School, 87%</li>
          </ul>
        </section>

        <section id="projects" className="content-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Online Voting System</h3>
              <p>
                Django web app for secure institutional elections with scheduled events, approval workflows, one-vote policy, and real-time results.
              </p>
              <a href="https://github.com/arjunan-IT/OnlineVotingSystem.git" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </div>

            <div className="project-card">
              <h3>Online Cooking Advisor</h3>
              <p>
                Recipe recommendation app with ingredient-based search, ratings, saving options, and step-by-step cooking guidance.
              </p>
              <a href="https://github.com/arjunan-IT/Online-cooking-adviser.git" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </div>
          </div>
        </section>

        <section id="certificate" className="content-section">
          <h2>Certification</h2>
          <p><strong>Python Full-Stack Web Development</strong> – Palle Technologies (Offline, Aug 2022 - Feb 2023)</p>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <div className="contact-container">
            <div className="contact-details">
              <p><FaEnvelope /> Email: <a href="mailto:arjunanbvocit@gmail.com">arjunanbvocit@gmail.com</a></p>
              <p><FaPhone /> Phone: +91 7094335398</p>
              <p><FaLinkedin /> LinkedIn: <a href="https://linkedin.com/in/arjunan-m" target="_blank" rel="noopener noreferrer">linkedin.com/in/arjunan-m</a></p>
              <p><FaGithub /> GitHub: <a href="https://github.com/arjunan-IT" target="_blank" rel="noopener noreferrer">github.com/arjunan-IT</a></p>
            </div>
            <div className="map-container">
  <h3 style={{ color: '#fff', marginBottom: '10px' }}>
    📍 Kosur, Karur - Tamil Nadu, India
  </h3>
  <iframe
    title="My location"
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d45335.013271583026!2d78.33568278589199!3d10.74775113177583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1754723037755!5m2!1sen!2sin"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Arjunan M</p>
      </footer>
    </div>
  );
}

export default App;
