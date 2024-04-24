import React, { useState, useEffect } from 'react';
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
          <button className='previous-image' onClick={previousImage}>&lt;</button>
          <button className='next-image' onClick={nextImage}>&gt;</button>
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
          <a href={githubLink} target="_blank" rel="noreferrer">Click me <HiOutlineArrowRight style={{ marginLeft: '5%' }} /></a>
        ) : (
          <p>[Private]</p>
        )}
        <h1>Deployment or Video:</h1>
        {deploymentLink != null ? (
          <a href={deploymentLink} target="_blank" rel="noreferrer">Click me <HiOutlineArrowRight style={{ marginLeft: '5%' }} /></a>
        ) : (
          <p>[Private]</p>
        )}
      </div>
    </div>
  );
};

export default Portfolios;
