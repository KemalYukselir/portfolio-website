import React from 'react'
import Navigation from './NavigationBar'
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
            C:\Users\Kemal Yukselir{">"}<span className="vertical-line-animation"> |</span>
          </h1>
          </div>

          <div class='terminal-screen'> 
            <a class='terminal-selections'>
            <span class='hidden-text'>PROBLEMS OUTPUT DEBUG CONSOLE <span style={{ color: 'green',  textDecoration: 'underline'}}>TERMINAL</span> PORTS</span>
              <span class='terminal-option'><AiOutlinePlus/> <FaRegTrashAlt/> ...</span>
            </a>

            <br/>
            <br/>
            <div className='terminal-text'>
              <a class='terminal-info'>[ <span>Info</span> ] :</a> <a>Welcome to my portfolio, which consists of projects I have completed or I'm working on. 
                Check out my contact information section to access my LinkedIn, etc.</a>
              <br/>
              <br/>
              <a class='terminal-info'>[ <span>Info</span> ] :</a> <a> Feel free to scroll through the project images with the buttons above it.</a>
              <br/>
              <br/>
              <a class='terminal-info'>[ <span>Info</span> ] :</a> <a> This website was made with react.{<FaReact/>}<a href="https://github.com/KemalYukselir/portfolio-website" target="_blank" rel="noreferrer">[Github link]</a></a>
              <br/>
              <span className="vertical-line-animation">▯</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
