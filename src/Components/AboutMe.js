import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";

const AboutMe = () => {
  return (
    <div className="aboutme-section-wrapper">
      <div className="aboutme-section-top">
        <h1>A little about me</h1>
        <div className='about-me-logo'>
          <IoPersonCircleOutline/>
        </div>
        <p>Hi, I’m Kemal Yukselir, a dedicated and adaptable professional with a First Class Honours degree in Computer Science from the University of Kent. My journey into technology began in 2020, inspired by a passion for solving problems and creating impactful solutions. Since then, I’ve worked on a wide range of projects, leveraging various tools, frameworks, and technologies to deliver high-quality results.
        <br/><br/>I’m passionate about innovation, particularly the integration of AI and machine learning into modern development, and I thrive in collaborative environments that encourage creativity and growth. With experience in cloud platforms and modern development practices, I am committed to delivering solutions that make a difference.
        <br/><br/>Outside of work, I enjoy staying active through boxing and football, as well as exploring creative and technical pursuits.</p>
      </div>
    </div>
  );
}

export default AboutMe;
