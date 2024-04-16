import React from 'react'
import placeholderImage from "../Assets/placeHolderImage.jpg"

const Portfolios = () => {
  return (
    <div>
        <div className='portfolio-section'>
            <img src={placeholderImage} alt="Placeholder Image"/>
            <h1>Project Name: Mafia Game</h1>
            <h1>Game Stack: ....</h1>
            <h1>GitHub: [Private]</h1>
            <h1>Deployment: ....</h1>
        </div>
    </div>
  )
}

export default Portfolios
