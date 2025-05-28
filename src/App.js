import './App.css';
import {useEffect} from 'react';
import Home from './Components/Home';
import Portfolios from './Components/Portfolios';
import ContactPage from './Components/ContactPage';
import AnimationBubbles from './Components/AnimationBubbles';
import SkillSection from './Components/SkillSection';
import AboutMe from './Components/AboutMe';

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

import RemoteBurnout1 from "./Assets/RemoteBurnout1.png";
import RemoteBurnout2 from "./Assets/RemoteBurnout2.png";
import RemoteBurnout3 from "./Assets/RemoteBurnout3.png";
import RemoteBurnout4 from "./Assets/RemoteBurnout4.png";
import RemoteBurnout5 from "./Assets/RemoteBurnout5.png";
import RemoteBurnout6 from "./Assets/RemoteBurnout6.png";

// import StudentCertify1 from "./Assets/StudentCertify1.png";
import StudentCertify2 from "./Assets/StudentCertify2.png";
import StudentCertify3 from "./Assets/StudentCertify3.png";
import StudentCertify4 from "./Assets/StudentCertify4.png";
import StudentCertify5 from "./Assets/StudentCertify5.png";


import WHO1 from "./Assets/WHO1.png";
import WHO2 from "./Assets/WHO2.png";
import WHO3 from "./Assets/WHO3.png";
import WHO4 from "./Assets/WHO4.png";
import WHO5 from "./Assets/WHO5.png";
import WHO6 from "./Assets/WHO6.png";
import WHO7 from "./Assets/WHO7.png";


import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";



function App() {
  // Cursor follow animation 
  useEffect(() => {
    const coords = { x: 0, y: 0}
    const circles = document.querySelectorAll(".circle");
    const colors = [
      "#0cc2c4",
      "#00bfd5",
      "#00bbe7",
      "#00b6f7",
      "#00afff",
      "#26a5ff",
      "#6d99ff",
      "#9c8aff"
    ];
    

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length]
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY + window.scrollY; // Adjust for scroll position

      animateCircles()
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / 8;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.7;
        y += (nextCircle.y - y) * 0.7;
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <AnimationBubbles/>
      <Home/>
      <h1>About me</h1>
      <AboutMe/>
      <h1 id='personal-skills-title'>Technical skills</h1>
      <SkillSection 
        skillsetTitle="Languages"
        skills={[<FaPython className='skillset-icon'/>, "Python", <TbBrandJavascript className='skillset-icon'/>, "Javascript",
        <FaHtml5 className='skillset-icon'/>, "HTML", <FaCss3Alt className='skillset-icon'/>, "CSS", <FaJava className='skillset-icon'/>, "Java",
        <TbBrandCSharp className='skillset-icon'/>, "C#", <SiCplusplus className='skillset-icon'/>, "C++", <SiTypescript className='skillset-icon'/>, "Typescript"
        , <FaPhp className='skillset-icon'/>, "PHP"
      ]}
      />
      <SkillSection 
        skillsetTitle="Tools"
        skills={[<FaAngular className='skillset-icon'/>, "Angular", <FaReact className='skillset-icon'/>, "React", <FaNodeJs className='skillset-icon'/>, "Node.js",
        <FaFigma className='skillset-icon'/>, "Figma", <TbSql className='skillset-icon'/>, "SQL", <DiMongodb className='skillset-icon'/>, "MongoDB", <SiDjango className='skillset-icon'/>, "Django",
        <SiFlask className='skillset-icon'/>, "Flask", <TbBrandReactNative className='skillset-icon'/>, "React Native", <SiSpringboot className='skillset-icon'/>, "Spring", <FaUnity className='skillset-icon'/>, "Spring",
      ]}
      />
      <h1 id='projects'>Latest Projects</h1>
      <div className='portfolio-container'>
        <div>
          <Portfolios
            projectName="Remote Working Burnout Analysis"
            gameStack="Streamlit, Python and Visual Studio Code"
            githubLink="https://github.com/KemalYukselir/Remote-Workers-Analysis"
            projectInformation="Built a Streamlit web app to explore burnout among remote workers using survey data from OSMI. Developed a predictive model with XGBoost, and created an interactive dashboard with Tableau to present key insights. The project also includes a live predictor and a dedicated page outlining ethical considerations and responsible use."
            deploymentLink={"https://huggingface.co/spaces/Kemzo/Remote-worker-analysis"}
            imgPlaceHolder={[RemoteBurnout1,RemoteBurnout2,RemoteBurnout3,RemoteBurnout4,RemoteBurnout5,RemoteBurnout6]}
            flip={true}
          />
        </div>
        <div>
          <Portfolios
            projectName="Student Certification Rate Analysis"
            gameStack="Streamlit, Python and Visual Studio Code"
            githubLink="https://github.com/KemalYukselir/student-certify-rate"
            projectInformation="This project is a Streamlit-powered project that predicts online course certification rates using a linear regression model trained on historical data from Harvard and MIT. It includes interactive insights, ethical considerations, and a live predictor based on user-inputted course details."
            deploymentLink={"https://huggingface.co/spaces/Kemzo/Student-certify-rate"}
            imgPlaceHolder={[StudentCertify2,StudentCertify3,StudentCertify4,StudentCertify5]}
            flip={true}
          />
        </div>
        <div>
          <Portfolios
            projectName="WHO Life Expectancy Model"
            gameStack="Streamlit, Python Notebook and Visual Studio Code"
            githubLink="https://github.com/KemalYukselir/WHO-Life-Expectancy"
            projectInformation="Explored life expectancy data from the World Health Organization and built two linear regression models — one using all available features and another excluding sensitive data to assess the impact on fairness and accuracy. Carried out data cleaning, one-hot encoding, log transformations, and multicollinearity checks using VIF. Used Python and Statsmodels to train and evaluate the models, achieving an R² of 0.96 and a test RMSE of ~2.15. Strengthened skills in ethical modelling, data preparation, and producing interpretable results."
            deploymentLink={""}
            imgPlaceHolder={[WHO1,WHO2,WHO3,WHO4,WHO5,WHO6,WHO7]}
            flip={true}
          />
        </div>
        {/* <div>
          <Portfolios
            projectName="Mafia Game"
            gameStack="React Native, Node.js, Visual Studio Code, Figma"
            githubLink={null}
            projectInformation="The Mafia Game is a game where a group of friends get together and immerse themselves in a social deduction experience, taking on the roles of mafia and civilians in a battle of wits and deception."
            deploymentLink="https://themafiagame.netlify.app/"
            imgPlaceHolder={[MafiaGameImg1, MafiaGameImg2, MafiaGameImg3, MafiaGameImg4]}
          />
        </div> */}
        <div>
          <Portfolios
            projectName="Escape The Ghosts"
            gameStack="Unity Game Engine, C#, Visual Studio, Figma"
            githubLink="https://github.com/KemalYukselir/Escape-The-Ghosts"
            projectInformation="Escape The Ghosts is a game where the player has to escape the maze full of ghosts by collecting gems scattered across the map. The player has a gun and 4 health points with power-ups ready to be picked up."
            deploymentLink={null}
            imgPlaceHolder={[escapeTheGhosts1, escapeTheGhosts2, escapeTheGhosts3, escapeTheGhosts4]}
            flip={true}
          />
        </div>
        {/* <div>
          <Portfolios
            projectName="AllThatFalafel & More Website"
            gameStack="React, Visual Studio Code, Figma"
            githubLink={null}
            projectInformation="Website for AllThatFalafel & More store based in London Southwark. AllThatFalafel & More serves brunch and more. This website is complete with mobile compatibility"
            deploymentLink="https://allthatfalafelmore.org/"
            imgPlaceHolder={[AllThatFalafelMore, AllThatFalafelMore2, AllThatFalafelMore3]}
            flip={true}
          />
        </div> */}
        <div>
          <Portfolios
            projectName="CyberTrace"
            gameStack="HTML/CSS/JS, Java, Springboot, MySQL"
            githubLink="https://github.com/KemalYukselir/cyber-trace-digital-forensics"
            projectInformation="CyberTrace - Digital Forensics Game. CyberTrace is a short video game/experience based around the concept of digital forensics from the point of view of volunteer law enforcement."
            deploymentLink="https://www.youtube.com/watch?v=dhT_Q_6H3w8"
            imgPlaceHolder={[finalYearProj1, finalYearProj2, finalYearProj3, finalYearProj4]}
          />
        </div>
        <div>
          <Portfolios
            projectName="Smart Plant Pot"
            gameStack="Arduino, C++"
            githubLink="https://github.com/KemalYukselir/Smart-Plant-Pot"
            projectInformation="The Smart Plant Pot is designed for users to monitor the plant's levels through an application. The Blynk application and LED display indicate when the plant needs watering. Users can monitor soil moisture levels, temperature, and humidity. Additionally, users can monitor multiple different plants as they wish."
            deploymentLink="https://www.youtube.com/watch?v=2mXiLEbZyAU&ab_channel=Kemal"
            imgPlaceHolder={[plantPot1, plantPot2, plantPot3, plantPot4]}
            flip={true}
          />
        </div>
      </div>
      <h1 id="contacts">Personal Information</h1>
      <ContactPage/>
    </div>
    
  );
}

export default App;
