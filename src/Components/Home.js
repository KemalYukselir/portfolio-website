import React from 'react';
import Navigation from './NavigationBar';
import Typewriter from 'typewriter-effect';
import { FaReact } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  return (
    <div className='home-container'>
      <Navigation />
      <div className="home-section">
          <div className='home-heading-section'>
            <h1 id="primary-heading">
              <Typewriter
              options={
                {
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: ["Portfolio of Kemal Yukselir"],
                  pauseFor: 4000
                }
              }
              />
              {/* C:\Users\Kemal Yukselir{">"}<span className="vertical-line-animation"> |</span> */}
            </h1>
          </div>

          <div className='terminal-screen'> 
            <div className='terminal-selections'>
              <span className='hidden-text'>PROBLEMS OUTPUT DEBUG CONSOLE <span style={{ color: 'green', textDecoration: 'underline'}}>TERMINAL</span> PORTS</span>
              <span className='terminal-option'><AiOutlinePlus/> <FaRegTrashAlt/> ...</span>
            </div>
            <br/>
            <div className='terminal-text'>
              <div>[ <span className='terminal-info'>Info</span> ] : Welcome to my portfolio, which consists of projects I have completed or I'm working on. 
                Check out my contact information section to access my LinkedIn, etc.</div>
              <br/>
              <div>[ <span className='terminal-info'>Info</span> ] : Feel free to scroll through the project images with the buttons above it.</div>
              <br/>
              <div>[ <span className='terminal-info'>Info</span> ] : This website was made with react. <FaReact/><button><a href="https://github.com/KemalYukselir/portfolio-website" target="_blank" rel="noreferrer">[Github link]</a></button></div>
              <br/>
              C:\Users\Kemal Yukselir{">"} <span className="vertical-line-animation">▯</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
