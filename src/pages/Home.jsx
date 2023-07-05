import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

import { Link } from "react-router-dom";

function Home() {
  const linkedInUrl = 'https://www.linkedin.com/in/your-profile-url';
  const emailUrl = 'https://mail.google.com/mail/u/0/#inbox';
  const githubUrl = 'https://github.com/Hansraj-singh-tomar?tab=repositories';
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Hansraj</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </Link>
          <Link to={emailUrl} target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </Link>
          <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> 
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux/Thunk/Redux-Toolkit, HTML, CSS, React Native, NextJS, NPM, BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, Mongoose, MS-SQL-Server
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, C++, TypeScript, <b>Git/Github</b></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;