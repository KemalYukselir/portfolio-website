import React, { useState } from 'react';
import { HiOutlineArrowRight} from "react-icons/hi";



const Portfolios = ({ projectName, gameStack, projectInformation, githubLink, deploymentLink, imgPlaceHolder, imgWidth, imgHeight, flip }) => {
  // Check if the viewport width is less than or equal to 600px
const mediaQuery = window.matchMedia("(max-width: 600px)");

// Define a callback function to execute when the media query matches
const handleMediaQueryChange = (mediaQueryList) => {
  if (mediaQueryList.matches) {
    flip = true;
  } 
  };

  // Initially, call the callback function to check if the media query matches
  handleMediaQueryChange(mediaQuery);
  
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % imgPlaceHolder.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : imgPlaceHolder.length - 1));
  };

  return (
    <div>
      { flip ? 
        (
          <div className='portfolio-section'>
            <div className='img-container'>
              <div className="button-container">
                <button className='previous-image' onClick={previousImage}>&lt;</button>
                <button className='next-image' onClick={nextImage}>&gt;</button>
              </div>
              <div className='img-wrapper'>
                {/* Image */}
                <img src={imgPlaceHolder[currentImageIndex]} alt="Placeholder" style={{ width: imgWidth, height: imgHeight }}/>
              </div>
            </div>

            <div className='text-wrapper'>
              {/* Project Details */}
              <h1>Project Name And Tech Stack:</h1> <p>{projectName} <br/> {gameStack}</p>
              <h1>Project Information:</h1><p>{projectInformation}</p>
              {githubLink != null ? (
                <>
                  <h1>GitHub:</h1><a href={githubLink} target="_blank" rel="noreferrer">Click me
                  <HiOutlineArrowRight style={{marginLeft: '5%' }}/></a>
                </>
              ) : (
                <>
                  <h1>GitHub:</h1> <p>[Private]</p>
                </>)}

              {deploymentLink != null ? (
                <>
                  <h1>Deployment or Video:</h1><a href={deploymentLink} target="_blank" rel="noreferrer">Click me
                  <HiOutlineArrowRight style={{marginLeft: '5%' }}/></a>
                </>
              ) : (
                <>
                  <h1>Deployment or Video:</h1> <p>[Private]</p>
                </>)}
            </div>
          </div>
        ) : (
          <div className='portfolio-section'>
            <div className='text-wrapper'>
              {/* Project Details */}
              <h1>Project Name And Tech Stack:</h1> <p>{projectName} <br/> {gameStack}</p>
              <h1>Project Information:</h1><p>{projectInformation}</p>
              {githubLink != null ? (
                <>
                  <h1>GitHub:</h1><a href={githubLink} target="_blank" rel="noreferrer">Click me
                  <HiOutlineArrowRight style={{marginLeft: '5%' }}/></a>
                </>
              ) : (
                <>
                  <h1>GitHub:</h1> <p>[Private]</p>
                </>)}              
                {deploymentLink != null ? (
                <>
                  <h1>Deployment or Video:</h1><a href={deploymentLink} target="_blank" rel="noreferrer">Click me
                  <HiOutlineArrowRight style={{marginLeft: '5%' }}/></a>
                </>
              ) : (
                <>
                  <h1>Deployment or Video:</h1> <p>[Private]</p>
                </>)}
            </div>
            <div className='img-container'>
              <div className="button-container">
                <button className='previous-image' onClick={previousImage}>&lt;</button>
                <button className='next-image' onClick={nextImage}>&gt;</button>
              </div>
              <div className='img-wrapper'>
                {/* Image */}
                <img src={imgPlaceHolder[currentImageIndex]} alt="Placeholder" style={{ width: imgWidth, height: imgHeight }}/>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Portfolios;
