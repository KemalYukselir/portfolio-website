import React from 'react'
import Navigation from './NavigationBar'

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
      </div>
    </div>
  )
}

export default Home
