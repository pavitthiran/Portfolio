import { useState, useEffect } from 'react';
import { GlobalShaderBackground } from './components/GlobalShaderBackground';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer for reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <GlobalShaderBackground />
      <div className="portfolio-container">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <h3 className="logo">
            <span className="neon">P</span>avitthiran R A<span className="logo-spark">✦</span>
          </h3>
          <ul className="nav-links">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <a href="/assets/Pavitthiran_Java_Developer_Resume.pdf" className="nav-btn-solid" download>
              Resume <span className="btn-spark">✦</span>
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="reveal">
            <h1>Hi, I'm <span>Pavitthiran</span></h1>
            <h2>Java Backend Developer | Spring Boot | SQL</h2>
            <p>
              I build clean, scalable backend applications using Java and Spring Boot,
              with a strong focus on REST APIs and databases.
            </p>
          </div>

          <div className="buttons reveal">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/assets/Pavitthiran_Java_Developer_Resume.pdf" className="btn secondary" download>
              Download Resume
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about reveal" id="about">
          <h2>About Me</h2>
          <p>
            I am an entry-level Java Backend Developer with hands-on experience in building
            RESTful applications using Java, Spring Boot, and MySQL. I have worked on backend-focused
            projects where I designed and implemented CRUD operations, developed REST APIs,
            and handled database interactions using Spring Data JPA and Hibernate.
            <br /><br />
            I am comfortable testing APIs using Postman and following clean coding practices
            while developing backend systems. Along with backend development, I have basic
            knowledge of HTML, CSS, and JavaScript, which helps me understand full-stack workflows.
            <br /><br />
            I have a basic understanding of core computer science concepts such as OOP, DBMS,
            Operating Systems, and Computer Networks. I am eager to strengthen my knowledge in
            these areas while improving my problem-solving skills and growing as a backend
            engineer by building scalable and reliable applications.
          </p>
        </section>

        {/* SKILLS */}
        <section className="skills reveal" id="skills">
          <h2>Skills</h2>
          <div className="skill-grid">
            <div className="skill-card">Java</div>
            <div className="skill-card">Spring Boot</div>
            <div className="skill-card">REST APIs</div>
            <div className="skill-card">MySQL / SQL</div>
            <div className="skill-card">Git & GitHub</div>
            <div className="skill-card">Postman</div>
            <div className="skill-card">HTML, CSS, JavaScript</div>
            <div className="skill-card">React Js</div>
            <div className="skill-card">OOP, DBMS, OS, CN</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects reveal" id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Student Management System</h3>
              <p>
                Full-stack web application for managing student records. Built using Spring Boot
                with JWT authentication and Role-Based Access Control (RBAC). Provides secure
                REST APIs with MySQL database integration for managing student data.
              </p>
              <span>Java • Spring Boot • JWT • MySQL • REST APIs • HTML • CSS • JavaScript</span>
              <div className="project-links">
                <a href="https://github.com/pavitthiran/student-management-system" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <h3>Graphoria – Startup Design Studio Website</h3>
              <p>
                Built a modern design studio website as part of a startup project.
                Worked on developing a responsive UI and integrating it with backend APIs.
                Focused on performance, clean design, and smooth user experience.
              </p>
              <span>Java • Spring Boot • REST APIs • PostgreSQL • React • Tailwind CSS</span>
              <div className="project-links">
                <a href="https://graphoria.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="https://github.com/pavitthiran/graphoria" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact reveal" id="contact">
          <h2>Contact</h2>
          <div className="social-links">
            <a href="mailto:pavitthiran66@gmail.com" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
            <a href="https://linkedin.com/in/pavitthiran" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://github.com/pavitthiran" target="_blank" rel="noreferrer" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href="tel:+916374520560" title="Phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 Pavitthiran R A. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
