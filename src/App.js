import './App.css';
import Home from './Components/Home';
import Portfolios from './Components/Portfolios';
import MafiaGameImg from "./Assets/mafiaGameImg.png";
import groupProjectImg from "./Assets/groupDissImg.png";


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
        projectName="CyberTrace - Digital Forensics Game (Final Year Project)"
        gameStack="HTML/CSS/JS, Java, Springboot, MySQL"
        githubLink="[Private]"
        deploymentLink = {null}
        imgPlaceHolder= {groupProjectImg}
        imgWidth = "1300px"
        imgHeight = "450px"
      />
    </div>
    
  );
}

export default App;
