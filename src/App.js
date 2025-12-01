import './App.css';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ContactForm from './ContactForm';

function App() {
  const resumeUrl = `${process.env.PUBLIC_URL}/assets/Cerasaro_resume_25112025.pdf`;
  const handleOpenResume = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
  <>
    <Navbar fixed="top">
      <Container>
        <Nav>
          <Nav.Link href="#about"> About </Nav.Link>
          <Nav.Link href="#projects"> Projects </Nav.Link>
          <Nav.Link href="#contact"> Contact </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <main className="site-container">

      <div id="about">
        <h1>About</h1>
        <h2 id="name"> Kimberlyn Cerasaro</h2>
        <div className="about-row">
          <div className="about-text">
            <p id="summary">I graduated from Drexel University with a degree in Computer Science in 2025. Throughout my courses and co-ops, 
                            I have gained experience in full-stack web development, mobile app development, and game development.</p>

            <p id="summary">Today, I continue to explore and expand my skills in web and mobile app development. Every day I get to challenge
                            my problem solving skills through developing my own web application and volunteering as a technical advisor on a 
                            former project of mine. I am always eager to learn and expand my skillset, and I continue to do so through creating
                            my own tools and leading others. </p>

            <p id="skills"><b>Languages:</b> Java | Python | C</p>
            <p id="skills"><b>Frameworks & Tools:</b> React Native | Springboot Java | Git | Figma | Unity</p>
            <p id="courses"><b>Relevant Courses:</b> Artificial Intelligence | Machine Learning | Interactive Computer Graphics |
                               Human-Centered Design | Computer Game Design and Development</p>
          </div>
          <img id="profilePic" src={`${process.env.PUBLIC_URL}/assets/workpfp2square.jpg`} alt="Kimberlyn Cerasaro"></img>
        </div>
      </div>

      <div id="resume">
        <span className="social-icons">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/kcerasaro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <img src={`${process.env.PUBLIC_URL}/assets/linkedIn.png`} alt="LinkedIn" />
          </a>
          <a
            className="icon-link"
            href="https://github.com/kcerasaro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <img src={`${process.env.PUBLIC_URL}/assets/gitHub.png`} alt="GitHub" />
          </a>
        </span>
        <button id="resumeButton" onClick={handleOpenResume}>My Resume</button>
      </div>

      <div id="projects">
        <h1>Projects</h1>

         <div className="project-row">
          <div className="project-text">
            <a id="title" href="https://github.com/kcerasaro/Star-Rail-Dashboard">Star Rail Dashboard</a>
            <p id="role">Full-stack developer</p>
            <p id="projectSummary"> An ongoing project where I dive deep into full-stack development. I am creating a personalized 
                                    dashboard for one of my favorite games. Here, I am building a REST API that connects to a PostgreSQL
                                    server, and the endpoints are documented with Swagger. I dig further into understanding MVC through 
                                    NestJS's easy to learn module system. The frontend, backend, and database are hosted through Docker containers for 
                                    portability and unified building. As features are added, I hope to develop more skills in development from 
                                    user authentication to migrations. </p>
            
            <p id="projectTech"><b>NestJS | React | Vite | PostgreSQL | Docker | Swagger</b></p>
          </div>
          <img id="projectImg" src={`${process.env.PUBLIC_URL}/assets/srdplaceholder.png`} alt="Player 2"></img>
        </div>

        <div className="project-row">
          <div className="project-text">
            <a id="title" href="https://seniorproject.cci.drexel.edu/project/8e6cbfc7-93dc-4cca-ad05-82847a5bb149">Senior Project: Player 2 Game Library</a>
            <p id="role">Team Lead</p>
            <p id="projectSummary"> A 30-week project where I lead a team of six to design and develop a game library feature for the mobile app Player 2.
                                    Here, I lead the design and created the pixel-perfect prototype of the game library in Figma. I acted as a full-stack
                                    developer to lead the back-end and front-end team members through development. More specifically, I focused on developing
                                    the features for the game articles section of the game libary from designing the components in React Native to developing
                                    the web scraper using JSoup in Springboot Java to gather the most recent gaming news. </p>

             <p id="projectSummary"> Today, I act as a technical advisor for the current senior project class. Here, I am the first point of contact for
                                     the students from technical questions and troubleshooting to general guidance through the project. </p>
            
            <p id="projectTech"><b>Springboot Java | React Native | Typescript | Expo | Figma</b></p>
          </div>
          <img id="projectImg" src={`${process.env.PUBLIC_URL}/assets/p2Logo.png`} alt="Player 2"></img>
        </div>

        <div className="project-row">
          <div className="project-text">
            <a id="title" href="https://totally-legit-game-studio.com/index.html">Totally Legit Game Studio: Recipe for Ruin</a>
            <p id="role">Web Developer</p>
            <p id="projectSummary">A 20-week project where 16 students came together as a game studio to create a 2.5D rogue-like game.
                                   I worked in the production department as a web developer. Here, I helped design and develop the website- 
                                   updating the website as the development of the game progressed.
            </p>
            <p id="projectTech"><b>HTML | CSS | Javascript | GitHub Pages | Figma</b></p>
          </div>
          <img id="projectImg" src={`${process.env.PUBLIC_URL}/assets/tlgslogotitle.png`} alt="Totally Legit Game Studio"></img>
        </div>
      </div>

      <div id="contact">
        <h1>Contact</h1>
        <section>
          <ContactForm />
        </section>
      </div>
    </main>
  </>
  );
}

export default App;