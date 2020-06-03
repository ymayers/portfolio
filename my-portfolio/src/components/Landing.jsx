import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Typist from "react-typist";

import "./Landing.css";

function Landing() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
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

  // const list = {
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.5,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     transition: {
  //       when: "afterChildren",
  //     },
  //   },
  // };

  // const item = {
  //   visible: { opacity: 1, x: 0 },
  //   hidden: { opacity: 0, x: -100 },
  // };

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
      {/* <motion.ul initial="hidden" animate="visible" variants={list}>
        <motion.li variants={item}>
          {" "}
          <h1>This is the Landing Page</h1>{" "}
        </motion.li>
        .
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul> */}

      <motion.div
        className="welcome"
        initial={{ opacity: 0, x: -350 }}
        // animate={{ opacity: 1 }}
        animate={{ opacity: 2, x: 10 }}
        transition={{ ease: "easeOut", duration: 1 }}
        // exit={{ opacity: 0 }}
        //   initial="hidden"
        // animate="visible"
        // initial={false}
        //   transition={{ ease: "easeOut", duration: 1 }}
        // variants={variants}
        // transition={{ duration: 8.5 }}
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

      {/* <motion.circle
cx={500}
animate={{ cx: [null, 100, 200] }}
transition={{ duration: 3, times: [0, 0.2, 1] }}
      /> */}
    </section>
  );
}

export default Landing;
