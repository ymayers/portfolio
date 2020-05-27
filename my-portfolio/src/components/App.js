import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";



import Landing from "./Landing";
import Header from "./Header";
import Projects from "./Projects";

import "./App.css";

// const variants = {
//   enter: (direction: number) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1
//   },
//   exit: (direction: number) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   }
// };

export const App = () => {
  return (
    <div className="app">
      <AnimatePresence>
        <motion.div
          className="header-holder"
          key="header"
          initial={{ opacity: 0 , y: -10}}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0 }}
        >
          <Header/>
        </motion.div>
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Landing />
        </motion.div>
        }
      </AnimatePresence>
      {/* <Route exact path="/projects" render={() => (<Projects />)} /> */}
      <Projects />
    </div>
  );
};

export default App;
