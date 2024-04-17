import './App.css';
import Home from './Components/Home';
import Portfolios from './Components/Portfolios';
import ContactPage from './Components/ContactPage';

import MafiaGameImg from "./Assets/mafiaGameImg.png";
import groupProjectImg from "./Assets/groupDissImg.png";
import escapeTheGhostsGame from "./Assets/escapeTheGhostsGame.png";
import plantPotImg from "./Assets/plantPotImg.jpg";

function App() {
  return (
    <div className="App">
      <Home/>
      <Portfolios
        projectName="Mafia Game"
        gameStack="React Native, Node.js"
        githubLink="[Private]"
        deploymentLink="https://themafiagame.netlify.app/"
        imgPlaceHolder= {MafiaGameImg}
        imgWidth = "550px"
        imgHeight = "600px"
      />
      <Portfolios
        projectName="Escape The Ghosts"
        gameStack="Unity, C#"
        githubLink="https://github.com/KemalYukselir/Escape-The-Ghosts"
        deploymentLink = {null}
        imgPlaceHolder= {escapeTheGhostsGame}
        imgWidth = "1300px"
        imgHeight = "450px"
        flip={true}
      />
      <Portfolios
        projectName="CyberTrace - Digital Forensics Game (Final Year Project)"
        gameStack="HTML/CSS/JS, Java, Springboot, MySQL"
        githubLink="https://github.com/KemalYukselir/cyber-trace-digital-forensics"
        deploymentLink = {null}
        imgPlaceHolder= {groupProjectImg}
        imgWidth = "1300px"
        imgHeight = "450px"
      />
      <Portfolios
        projectName="Smart Plant Pot"
        gameStack="Arduino, C++"
        githubLink="https://github.com/KemalYukselir/Smart-Plant-Pot"
        deploymentLink = {null}
        imgPlaceHolder= {plantPotImg}
        imgWidth = "550px"
        imgHeight = "600px"
        flip={true}
      />
      <ContactPage/>
    </div>
    
  );
}

export default App;
