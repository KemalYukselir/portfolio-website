import React from 'react'
import Navigation from './NavigationBar'
import { FaReact } from "react-icons/fa";


const Home = () => {
  return (
    <div className='home-container'>
      <Navigation />
      <div className="home-section">
          <h1 id="primary-heading">
            Hello, I'm Kemal Yukselir...|
          </h1>
          <p id="primary-text">
            Welcome to my portfolio, which consists of projects I have completed or I'm working on. <br/>
            Check out my contact information section to access my LinkedIn, etc.
          </p>
          <p id="primary-text">
            Feel free to scroll through the project images with the buttons above it. <br/>
          </p>
          <p id="primary-text">
            This website was made with react.{<FaReact/>}<a href="https://github.com/KemalYukselir/portfolio-website" target="_blank" rel="noreferrer">[Github link]</a> 
          </p>
      </div>
    </div>
  )
}

export default Home
