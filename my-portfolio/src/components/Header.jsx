import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="nav">
        <Link to="/">
          {" "}
          <a classname="about-link" href="#about">
            About
          </a>{" "}
        </Link>
        {/* <Link to="/projects">
          {" "}
          <a classname="projects-link" href="#projects">
            Projects
          </a>{" "}
        </Link> */}
        {/* <a classname="projects-link" href="#project-container">Projects</a>
        <a classname="resume-link" href="#resume-container">
          Resume
        </a>
        <a classname="contact-link" href="#contact">
          Contact Me
        </a> */}
                <Link to="/projects" classname="projects-link" >Projects</Link>
        <Link to="/resume" classname="resume-link">
          Resume
        </Link>
        <Link to="/contact" classname="contact-link">
          Contact Me
        </Link>
      </nav>
    </>
  );
}

export default Header;
