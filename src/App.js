import './App.css';
import Home from './Components/Home';
import Portfolios from './Components/Portfolios';
import ContactPage from './Components/ContactPage';
import AnimationBubbles from './Components/AnimationBubbles';
import SkillSection from './Components/SkillSection';

import MafiaGameImg1 from "./Assets/mafiaGameImg1.png";
import MafiaGameImg2 from "./Assets/mafiaGameImg2.png";
import MafiaGameImg3 from "./Assets/mafiaGameImg3.png";
import MafiaGameImg4 from "./Assets/mafiaGameImg4.png";

import escapeTheGhosts1 from "./Assets/escapeTheGhosts1.png";
import escapeTheGhosts2 from "./Assets/escapeTheGhosts2.png";
import escapeTheGhosts3 from "./Assets/escapeTheGhosts3.png";
import escapeTheGhosts4 from "./Assets/escapeTheGhosts4.png";


import finalYearProj1 from "./Assets/finalYearProj1.png";
import finalYearProj2 from "./Assets/finalYearProj2.png";
import finalYearProj3 from "./Assets/finalYearProj3.png";
import finalYearProj4 from "./Assets/finalYearProj4.png";

import plantPot1 from "./Assets/plantPot1.jpg";
import plantPot2 from "./Assets/plantPot2.png";
import plantPot3 from "./Assets/plantPot3.png";
import plantPot4 from "./Assets/plantPot4.png";

import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";


function App() {
  return (
    <div className="App">
      <AnimationBubbles/>
      <Home/>
      <h1>- Personal Skills -</h1>
      <SkillSection 
        skillsetTitle="Languages"
        skills={[<FaPython className='skillset-icon'/>, "Python", <TbBrandJavascript className='skillset-icon'/>, "Javascript",
        <FaHtml5 className='skillset-icon'/>, "HTML", <FaCss3Alt className='skillset-icon'/>, "CSS", <FaJava className='skillset-icon'/>, "Java",
        <SiCsharp className='skillset-icon'/>, "C#", <SiCplusplus className='skillset-icon'/>, "C++", <SiTypescript className='skillset-icon'/>, "Typescript"
      ]}
      />
      <SkillSection 
        skillsetTitle="Tools"
        skills={[<FaAngular className='skillset-icon'/>, "Angular", <FaReact className='skillset-icon'/>, "React", <FaNodeJs className='skillset-icon'/>, "Node.js",
        <FaFigma className='skillset-icon'/>, "Figma", <TbSql className='skillset-icon'/>, "SQL", <DiMongodb className='skillset-icon'/>, "MongoDB"
      ]}
      />
      <AnimationBubbles/>
      <Portfolios
        projectName="Mafia Game"
        gameStack="[React Native, Node.js]"
        githubLink={null}
        projectInformation=
        "The Mafia Game is a game where a group of friends get together and immerse themselves in a social deduction experience, taking on the roles of mafia and civilians in a battle of wits and deception."
        deploymentLink="https://themafiagame.netlify.app/"
        imgPlaceHolder= {[MafiaGameImg1, MafiaGameImg2, MafiaGameImg3, MafiaGameImg4]}
        imgWidth = "270px"
        imgHeight = "400px"
      />
      <AnimationBubbles/>
      <Portfolios
        projectName="Escape The Ghosts"
        gameStack="[Unity, C#]"
        githubLink="https://github.com/KemalYukselir/Escape-The-Ghosts"
        projectInformation='
        Escape The Ghosts is a game where the player has to escape the maze full of ghosts by collecting gems scattered across the map. 
        The player has a gun and 4 health points with power-ups ready to be picked up.
        '
        deploymentLink = {null}
        imgPlaceHolder= {[escapeTheGhosts1, escapeTheGhosts2, escapeTheGhosts3, escapeTheGhosts4]}
        imgWidth = "400px"
        imgHeight = "350px"
        flip={true}
      />
      <AnimationBubbles/>
      <Portfolios
        projectName="CyberTrace - Digital Forensics Game (Final Year Project)"
        gameStack="[HTML/CSS/JS, Java, Springboot, MySQL]"
        githubLink="https://github.com/KemalYukselir/cyber-trace-digital-forensics"
        projectInformation='
        CyberTrace is a short video game/experience based around the concept of digital forensics from the point of view of volunteer law enforcement, 
        with access to personal information and a persons online presence of individuals who are flagged as potentially 
        violating internet laws or actual laws via the internet
        '
        deploymentLink = "https://www.youtube.com/watch?v=dhT_Q_6H3w8"
        imgPlaceHolder= {[finalYearProj1, finalYearProj2, finalYearProj3, finalYearProj4]}
        imgWidth = "600px"
        imgHeight = "300px"
      />
      <AnimationBubbles/>
      <Portfolios
        projectName="Smart Plant Pot"
        gameStack="[Arduino, C++]"
        githubLink="https://github.com/KemalYukselir/Smart-Plant-Pot"
        projectInformation="
        The Smart Plant Pot is designed for users to monitor the plant's levels through an application.
        The Blynk application and LED display indicate when the plant needs watering.
        Users can monitor soil moisture levels, temperature, and humidity. Additionally, users can monitor multiple different plants as they wish.        
        "
        deploymentLink = "https://www.youtube.com/watch?v=2mXiLEbZyAU&ab_channel=Kemal"
        imgPlaceHolder= {[plantPot1, plantPot2, plantPot3, plantPot4]}
        imgWidth = "359px"
        imgHeight = "450px"
        flip={true}
      />
      <ContactPage/>
    </div>
    
  );
}

export default App;
