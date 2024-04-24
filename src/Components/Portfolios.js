import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { HiOutlineArrowRight } from "react-icons/hi";

const Portfolios = ({
  projectName,
  gameStack,
  projectInformation,
  githubLink,
  deploymentLink,
  imgPlaceHolder,
  imgWidth,
  imgHeight,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleMediaQueryChange = (mediaQueryList) => {
      setFlip(mediaQueryList.matches);
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % imgPlaceHolder.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : imgPlaceHolder.length - 1));
  };

  return (
    <div className='portfolio-section'>
      <div className={flip ? 'img-container-flip' : 'img-container'}>
        <div className="button-container">
          <Button variant="contained" onClick={previousImage}>Previous</Button>
          <Button variant="contained" onClick={nextImage}>Next</Button>
        </div>
        <div className='img-wrapper'>
          <img src={imgPlaceHolder[currentImageIndex]} alt="Placeholder" style={{ width: imgWidth, height: imgHeight }} />
        </div>
      </div>
      <div className='text-wrapper'>
        <h1>Project Name And Tech Stack:</h1>
        <p>{projectName} <br /> {gameStack}</p>
        <h1>Project Information:</h1>
        <p>{projectInformation}</p>
        <h1>GitHub:</h1>
        {githubLink != null ? (
          <Button variant="contained" onClick={() => window.open(githubLink, "_blank", "noopener")} style={{ cursor: 'pointer' }}>
          Click me <HiOutlineArrowRight style={{ marginLeft: '5%' }} />
          </Button>    
        ) : (
          <p>[Private]</p>
        )}
        <h1>Deployment or Video:</h1>
        {deploymentLink != null ? (
          <Button variant="contained" onClick={() => window.open(deploymentLink, "_blank", "noopener")} style={{ cursor: 'pointer' }}>
          Click me <HiOutlineArrowRight style={{ marginLeft: '5%' }} />
          </Button>
        ) : (
          <p>[Private]</p>
        )}
      </div>
    </div>
  );
};

export default Portfolios;
