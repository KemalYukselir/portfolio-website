import './App.css';
import Home from './Components/Home';
import Portfolios from './Components/Portfolios';
import MafiaGameImg from "./Assets/mafiaGameImg.png";


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
      />
    </div>
    
  );
}

export default App;
