import React, { Component } from "react";

import "./Projects.css";

class Projects extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section id="project-container">
        <h1 className="projects-header">Projects</h1>
        <section id="projects">
          <div className="project">
            <div className="project-heading">The Saint Albans Vitae</div>
            <div className="project-info">
              <section className="project-display">
                <a href="http://saint-albans-vitae.surge.sh/">
                  <img
                    classname="project-img"
                    src="https://imgur.com/qw6GoBV.png"
                    height="250"
                    width="400"
                    alt="vitae"
                  />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src="https://imgur.com/Tht4zSK.png"
                  height="40"
                  width="40"
                  alt="react"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/JgPQKPr.png"
                  height="40"
                  width="40"
                  alt="ruby"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/edqF1Rk.png"
                  height="40"
                  width="40"
                  alt="rails"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/f3z7EHF.png"
                  height="60"
                  width="60"
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
                  <img
                    classname="project-img"
                    src="https://imgur.com/mEW2NAO.png"
                    height="250"
                    width="400"
                    alt="squirrel"
                  />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src="https://imgur.com/P6EmRyD.png"
                  height="40"
                  width="40"
                  alt="mongo"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/kqnRFIR.png"
                  height="40"
                  width="40"
                  alt="express"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/Tht4zSK.png"
                  height="40"
                  width="40"
                  alt="react"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/LnQFwpV.png"
                  height="40"
                  width="40"
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
                  <img
                    classname="project-img"
                    src="https://imgur.com/aDFN45E.png"
                    height="250"
                    width="400"
                    alt="vietnaam"
                  />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src="https://imgur.com/WtvnJDS.png"
                  height="60"
                  width="60"
                  alt="css"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/gfaheDE.png"
                  height="60"
                  width="60"
                  alt="html"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/SF6PpNG.png"
                  height="60"
                  width="60"
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
                  <img
                    classname="project-img"
                    src="https://imgur.com/tdEinTR.png"
                    height="250"
                    width="400"
                    alt="covid"
                  />
                </a>
              </section>
              <section className="tech-list">
                <img
                  className="tech-img"
                  src="https://imgur.com/Tht4zSK.png"
                  height="40"
                  width="40"
                  alt="react"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/LnQFwpV.png"
                  height="40"
                  width="40"
                  alt="node"
                />
                <img
                  className="tech-img"
                  src="https://imgur.com/WtvnJDS.png"
                  height="60"
                  width="60"
                  alt="css"
                />
              </section>
            </div>{" "}
          </div>
        </section>
      </section>
    );
  }
}

export default Projects;
