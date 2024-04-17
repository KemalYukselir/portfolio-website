import React, { useState } from 'react';

const Portfolios = ({ projectName, gameStack, githubLink, deploymentLink, imgPlaceHolder, imgWidth, imgHeight, flip }) => {
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
                <button className='previous-image' onClick={previousImage}>{"<"}</button>
                <button className='next-image' onClick={nextImage}>{">"}</button>
              </div>
              <div className='img-wrapper'>
                {/* Image */}
                <img src={imgPlaceHolder[currentImageIndex]} alt="Placeholder" style={{ width: imgWidth, height: imgHeight }}/>
              </div>
            </div>

            <div className='text-wrapper'>
              {/* Project Details */}
              <h1>Project Name:</h1> <p>{projectName}</p>
              <h1>Game Stack:</h1> <p>{gameStack}</p>
              <h1>GitHub:</h1> <p>{githubLink}</p>
              {deploymentLink != null ? (
                <>
                  <h1>Deployment:</h1><a href={deploymentLink} target="_blank" rel="noreferrer">{deploymentLink}</a>
                </>
              ) : (
                <>
                  <h1>Deployment:</h1> <p>No Deployment</p>
                </>)}
            </div>
          </div>
        ) : (
          <div className='portfolio-section'>
            <div className='text-wrapper'>
              {/* Project Details */}
              <h1>Project Name:</h1> <p>{projectName}</p>
              <h1>Game Stack:</h1> <p>{gameStack}</p>
              <h1>GitHub:</h1> <p>{githubLink}</p>
              {deploymentLink != null ? (
                <>
                  <h1>Deployment:</h1><a href={deploymentLink} target="_blank" rel="noreferrer">{deploymentLink}</a>
                </>
              ) : (
                <>
                  <h1>Deployment:</h1> <p>No Deployment</p>
                </>)}
            </div>
            <div className='img-container'>
              <div className="button-container">
                <button className='previous-image' onClick={previousImage}>{"<"}</button>
                <button className='next-image' onClick={nextImage}>{">"}</button>
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
