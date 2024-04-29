import React, {useState, useEffect } from 'react';
// import { HiOutlineArrowRight } from "react-icons/hi";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Portfolios = ({
  projectName,
  gameStack,
  projectInformation,
  githubLink,
  deploymentLink,
  imgPlaceHolder,
  // imgWidth,
  // imgHeight,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [flip, setFlip] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleMediaQueryChange = (mediaQueryList) => {
      // setFlip(mediaQueryList.matches);
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
      <Card sx={{ 
        maxWidth: 345, 
        marginRight: '2.5%', 
        marginLeft: '2.5%',
        height: 'auto', 
        marginBottom: '10%',
        transition: 'transform 0.3s', // Add transition for smooth scaling
        '&:hover': {
          transform: 'scale(1.3)', // Scale up when hovered
        },
      }}>
      <CardMedia
        component="picture"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          height: 220,
          backgroundColor: 'black',
        }}
      >
        <img
          src={imgPlaceHolder[currentImageIndex]}
          alt="logo"
          style={{ height: '100%', width: 'auto' }}
        />
      </CardMedia>
        <div className="button-container">
          <Button variant="contained" onClick={previousImage}>{"<"}</Button>
          <Button variant="contained" onClick={nextImage}>{">"}</Button>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
            {projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{marginBottom: '5%', maxHeight: 120, overflowY: 'auto'}}>
            {projectInformation}
          </Typography>
          <Typography variant="h6" component="div">
            {gameStack}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'center', alignItems: 'center'}}>
          <Button size="small" onClick={() => window.open(githubLink, "_blank", "noopener")}>GitHub</Button>
          <Button size="small" onClick={() => window.open(deploymentLink, "_blank", "noopener")}>Deployment/Video</Button>
        </CardActions>
      </Card>
      {/* <div className={flip ? 'img-container-flip' : 'img-container'}>
        <div className='project-title-container'>
          <h1>Project Name And Tech Stack:</h1>
          <p>{projectName} <br /> {gameStack}</p>
        </div>

        <div className="button-container">
          <Button variant="contained" onClick={previousImage}>{"<"}</Button>
          <Button variant="contained" onClick={nextImage}>{">"}</Button>
        </div>
        <div className='img-wrapper'>
          <img src={imgPlaceHolder[currentImageIndex]} alt="Placeholder" style={{ width: imgWidth, height: imgHeight }} />
        </div>
      </div>
      <div className='text-wrapper'>
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
      </div> */}
    </div>
  );
};

export default Portfolios;
