import React, { Component } from "react";

import "./Projects.css";
import albans from "../assets/images/st_albans_v.png";
import squirrel from "../assets/images/red_squirrel.png";
import vietnaam from "../assets/images/vietnaam.png";
import covid from "../assets/images/covid_info.png";
import css from "../assets/images/css.png";
import express from "../assets/images/express.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import mongo from "../assets/images/mongo.png";
import node from "../assets/images/node.png";
import psql from "../assets/images/psql.png";
import rails from "../assets/images/rails.png";
import reactpic from "../assets/images/react.png";
import ruby from "../assets/images/ruby.png";

class Projects extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <h1 className="projects-header">Projects</h1>
        <section id="projects">
          <div className="project">
            <div className="project-heading">The Saint Albans Vitae</div>
            <div className="project-info">
              <section className="project-display">
                <a href="http://saint-albans-vitae.surge.sh/">
                  <img src={albans} height="350" width="500" alt="vitae" />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src={reactpic}
                  height="60"
                  width="60"
                  alt="react"
                />
                <img
                  className="tech-img"
                  src={ruby}
                  height="60"
                  width="60"
                  alt="ruby"
                />
                <img
                  className="tech-img"
                  src={rails}
                  height="60"
                  width="60"
                  alt="rails"
                />
                <img
                  className="tech-img"
                  src={psql}
                  height="70"
                  width="70"
                  alt="psql"
                />
              </section>
            </div>{" "}
          </div>
          <div className="project">
            <div className="project-heading">Red Squirrel</div>
            <div className="project-info">
              <section className="project-display">
                <a href="http://red-squirrel.surge.sh/">
                  {" "}
                  <img src={squirrel} height="350" width="500" alt="squirrel" />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src={mongo}
                  height="60"
                  width="60"
                  alt="mongo"
                />
                <img
                  className="tech-img"
                  src={express}
                  height="60"
                  width="60"
                  alt="express"
                />
                <img
                  className="tech-img"
                  src={reactpic}
                  height="60"
                  width="60"
                  alt="react"
                />
                <img
                  className="tech-img"
                  src={node}
                  height="60"
                  width="60"
                  alt="node"
                />
              </section>
            </div>{" "}
          </div>
          <div className="project">
            <div className="project-heading">Vietnaam 88</div>
            <div className="project-info">
              <section className="project-display">
                <a href="https://vietnaam88.netlify.app/">
                  {" "}
                  <img src={vietnaam} height="350" width="500" alt="vietnaam" />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src={css}
                  height="80"
                  width="80"
                  alt="css"
                />
                <img
                  className="tech-img"
                  src={html}
                  height="80"
                  width="80"
                  alt="html"
                />
                <img
                  className="tech-img"
                  src={js}
                  height="80"
                  width="80"
                  alt="js"
                />
              </section>
            </div>{" "}
          </div>
          <div className="project">
            <div className="project-heading">World COVID Info</div>
            <div className="project-info">
              {" "}
              <section className="project-display">
                <a href="https://world-covid-info.netlify.app/">
                  <img src={covid} height="350" width="500" alt="covid" />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src={reactpic}
                  height="60"
                  width="60"
                  alt="react"
                />
                <img
                  className="tech-img"
                  src={node}
                  height="60"
                  width="60"
                  alt="node"
                />
                <img
                  className="tech-img"
                  src={css}
                  height="80"
                  width="80"
                  alt="css"
                />
              </section>
            </div>{" "}
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
