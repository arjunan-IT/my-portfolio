//import { useState } from 'react';
import './App.css'; // Make sure this is imported
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';

const heroBackgroundImage = process.env.PUBLIC_URL + '/images/IMG_20250306_160225~3.jpg';


function App() {


  return (
    
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="bi bi-person" href="#hero"> ARJUNAN</a>
        </div>
        <ul className="navbar-nav">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#certificate">CERTIFICATION</a></li>
        </ul>
        <div className="navbar-social">
          <a href="https://linkedin.com/in/arjunan-m-4b6556228" target="_blank" rel="noopener noreferrer"><i style={{ color: '#0077b5' }} className="fab fa-linkedin"></i></a>
          <a href="https://github.com/arjunan-IT" target="_blank" rel="noopener noreferrer"><i style={{ color: 'white' }} className="fab fa-github"></i></a>
          <a href="https://instagram.com/maha_mathi_arjun" target="_blank" rel="noopener noreferrer"><i style={{ color: 'purple' }} className="fab fa-instagram"></i></a>
           <a href="https://wa.me/917094335398" target="_blank" rel="noopener noreferrer">
    <i style={{ color: 'green' }} className="fab fa-whatsapp"></i></a>
        </div>
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
            I'm an enthusiastic and detail-oriented Python Full-Stack Web Developer with a strong passion for building modern, user-friendly web applications. With a solid foundation in both front-end and back-end technologies, I specialize in Python, Django, React.js, HTML, CSS, JavaScript, and MySQL.
I recently completed an intensive Full Stack Development course and a 6-month hands-on internship, where I worked on real-world projects and honed my skills in developing dynamic, scalable web solutions. During this time, I gained practical experience in everything from designing intuitive user interfaces to managing databases and deploying applications.
I enjoy turning complex problems into simple, elegant solutions and constantly strive to learn and grow as a developer. Whether I'm writing clean backend logic or crafting interactive front-end components, my goal is to create impactful digital experiences that truly make a difference.
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
            <li><strong>HSC (Computer Science)</strong>, Sri Karunai Ragavaji Vidhyalaya Hr Sec School, 73%</li>
            <li><strong>SSLC</strong>, Bishop Heber Hr Sec School, 87%</li>
          </ul>
        </section>

        <section id="projects" className="content-section">
          <h2>Projects</h2>
          <div className="projects-grid"> {/* Use a grid for project cards */}
            <div className="project-card">
              <h3>Online Voting System</h3>
              <p>
                Developed a secure Django-based web app to automate institutional elections.
                Features include scheduled start/end, admin-controlled voter/candidate approval, one-vote-per-user system, email confirmations, and real-time results.
              </p>
              <a href="https://github.com/arjunan-IT/OnlineVotingSystem.git" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </div>

            <div className="project-card">
              <h3>Online Cooking Advisor</h3>
              <p>
                A recipe suggestion platform that allows users to search recipes based on ingredients, dietary needs, and cuisine.
                Includes recipe ratings, saving favorites, and step-by-step cooking instructions.
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
       <h3 style={{ color: '#fff', marginBottom: '10px' }}>📍Kosur, Karur-Tamil Nadu, India</h3>
   <iframe
   title='My location'
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d17251.020555092953!2d78.30901316134562!3d10.739872617418227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1753944048764!5m2!1sen!2sin"
     allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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