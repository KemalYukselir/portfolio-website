import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const ContactPage = () => {
  const workInfoData = [
    {
      image: <BsGithub style={{ fontSize: "7em" }} />,
      title: "GitHub",
      link: "https://github.com/KemalYukselir",
    },
    {
      image: <FaLinkedin style={{ fontSize: "7em" }} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kemal-yukselir-31a144222/",
    },
    {
      image: <MdOutgoingMail style={{ fontSize: "7em" }} />,
      title: "Gmail",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=K.Yukselir123@gmail.com",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 id="contacts">- Personal Information -</h1>
        <p>Below are my personal information. Send me a message or email if you have any questions.</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div>
            <a
              className="work-section-info"
              href={data.link}
              target="_blank"
              rel="noreferrer"
              key={data.title}
            >
              <div className="info-boxes-img-container">{data.image}</div>
              <h2>{data.title}</h2>
            </a>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ContactPage;
