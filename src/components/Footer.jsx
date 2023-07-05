import React from "react";

// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

import "../styles/Footer.css";

import {Link} from 'react-router-dom'

function Footer() {
  const linkedInUrl = 'https://www.linkedin.com/in/your-profile-url';
  const emailUrl = 'https://mail.google.com/mail/u/0/#inbox';
  const githubUrl = 'https://github.com/Hansraj-singh-tomar?tab=repositories';
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2022 Hansraj Singh Tomar, Indore, MP</p>
    </div>
  );
}

export default Footer;