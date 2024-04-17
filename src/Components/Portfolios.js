import React from 'react';

const Portfolios = ({ projectName, gameStack, githubLink, deploymentLink, imgPlaceHolder, imgWidth, imgHeight, flip }) => {
  return (
    <div>
      { flip ? 
      (
        <div className='portfolio-section'>
        <div className='img-wrapper'>
          <img src={imgPlaceHolder} alt="Placeholder" style={{ width: imgWidth, height: imgHeight }}/>
        </div>
        <div className='text-wrapper'>
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
        <div className='img-wrapper'>
          <img src={imgPlaceHolder} alt="Placeholder" style={{ width: imgWidth, height: imgHeight }}/>
        </div>
      </div>
      )

      }

  </div>
  )
}

export default Portfolios;
