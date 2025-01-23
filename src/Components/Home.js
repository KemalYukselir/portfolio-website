import React from 'react';
import Navigation from './NavigationBar';
import { FaArrowDown } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects'); // Target the "projects" section
    if (projectsSection) {
      const topOffset = projectsSection.offsetTop; // Get the top position relative to the document
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth', // Enable smooth scrolling
      });
    }
  };
  const scrollToContacts = () => {
    const projectsSection = document.getElementById('contacts'); // Target the "projects" section
    if (projectsSection) {
      const topOffset = projectsSection.offsetTop; // Get the top position relative to the document
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth', // Enable smooth scrolling
      });
    }
  };
  return (
    <div className='home-container'>
      <Navigation />
      <div className="home-section">
          <div className='home-heading-section'>
            <h2 data-text="Hello, I'm Kemal">
              Hello, I'm&nbsp;<span style={{ color: '#ff4d5a' }}>Kemal</span>.
            </h2>
            <h3>I enjoy solving problems and bringing ideas to life</h3>
            <div className='buttons'>
              <button onClick={scrollToProjects} className="scroll-button"><span>My Projects</span><FaArrowDown className="navBar-icon"/></button>
              <button onClick={scrollToContacts} className="scroll-button"><span>Contact me</span><FaArrowDown className="navBar-icon"/></button>  
            </div>
          </div>

          {/* <div className='terminal-screen'> 
            <div className='terminal-selections'>
              <span className='hidden-text'>PROBLEMS OUTPUT DEBUG CONSOLE <span style={{ color: 'green', textDecoration: 'underline'}}>TERMINAL</span> PORTS</span>
              <span className='terminal-option'><AiOutlinePlus/> <FaRegTrashAlt/> ...</span>
            </div>
            <br/>
            <div className='terminal-text'>
              <div>[ <span className='terminal-info'>Info</span> ] : Welcome to my portfolio, which consists of projects I have completed or I'm working on. 
                Check out my contact information section to access my LinkedIn, etc.</div>
              <br/>
              <div>[ <span className='terminal-info'>Info</span> ] : Feel free to scroll through the project images with the buttons on it.</div>
              <br/>
              <div>[ <span className='terminal-info'>Info</span> ] : My Portfolio was made with react. <FaReact/><button><a href="https://github.com/KemalYukselir/portfolio-website" target="_blank" rel="noreferrer">Github link</a></button></div>
              <br/>
              C:\Users\Kemal Yukselir{">"} <span className="vertical-line-animation">▯</span>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Home;
