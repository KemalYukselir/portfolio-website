import React from 'react'
import PlaceholderImage from "../Assets/placeHolderImage.jpg"
import MafiaGameImg from "../Assets/mafiaGameImg.png"

const Portfolios = () => {
  return (
    <div>
        <div className='portfolio-section'>
          <div className='img-wrapper'>
            <img src={MafiaGameImg} alt="Placeholder Image"/>
          </div>
          <div className='text-wrapper'>
              <h1>Project Name:</h1> <p>Mafia Game</p>
              <h1>Game Stack:</h1> <p>....</p>
              <h1>GitHub:</h1> <p>[Private]</p>
              <h1>Deployment:</h1> <p>....</p>
          </div>
        </div>
    </div>
  )
}

export default Portfolios
