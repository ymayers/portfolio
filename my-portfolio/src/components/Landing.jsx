import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Typist from "react-typist";

import "./Landing.css";

function Landing() {
  const Box = styled.div`
    background-color: transparent;
    box-shadow: 0.35px 1px 5px wheat, 1px 2px 50px black;
    border-radius: 6px;
    padding: 1em;
    margin: 13em 1em 0 1em;
    position: absolute;
    text-align: center;
    text-shadow: 1px 1px 2px wheat, 1px 3px 3px black;
    font-size: 20px;
    font-family: "Fredericka the Great", cursive;
  `;

  return (
    <section className="landing-container">
      <motion.div
        className="name-holder"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ ease: "easeOut", duration: 8 }}
      >
        <Typist>
          <h1 className="name">Yolea Mayers</h1>
        </Typist>
        <h2 className="title">Web Developer</h2>
      </motion.div>

      <motion.div
        className="welcome"
        initial={{ opacity: 0, x: -350 }}
        animate={{ opacity: 2, x: 10 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Box>
          <p id="about">
            I am a Full-Stack Web Developer and Solutions Engineer, based in
            NYC, with over 5 years of client-facing experience in the
            governmental and technological sectors. My focus is to create
            functional applications, that provide simple solutions to complex
            issues.
          </p>
        </Box>
      </motion.div>
    </section>
  );
}

export default Landing;
