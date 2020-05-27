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
        <a classname="projects-link" href="#projects">Projects</a>
        <a classname="resume-link" href="#resume">
          Resume
        </a>
        <a classname="contact-link" href="#contact">
          Contact Me
        </a>
      </nav>
    </>
  );
}

export default Header;
