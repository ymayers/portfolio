import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Icon from "../assets/images/Icon-YM.png"

function Header() {
  return (
    <div className="header-container">
      <img className="icon" src={Icon}/>
      <nav className="nav">
        <Link to="/">
          <a classname="about-link" href="#about">
            About
          </a>
        </Link>

        <Link to="/projects" classname="projects-link">
          Projects
        </Link>
        <Link to="/resume" classname="resume-link">
          Resume
        </Link>
        <Link to="/contact" classname="contact-link">
          Contact Me
        </Link>
      </nav>
      <section className="empty"/>
    </div>
  );
}

export default Header;
