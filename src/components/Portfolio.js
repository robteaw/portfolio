import React from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
// Animation
import { motion } from "framer-motion";
import { textAnim, cardAnim } from "../animations";
import { useScroll } from "../components/useScroll";

function Portfolio() {
  const [element, controls] = useScroll();

  return (
    <div>
      <div className="head-container" id="portfolio" ref={element}>
        <motion.h1
          initial="hidden"
          variants={textAnim}
          animate={controls}
          transition={{
            duration: 1,
          }}
          className="head-text"
        >
          Portfolio
        </motion.h1>
      </div>
      <section className="portfolio">
        <div className="card-container">
          <motion.div initial="hidden" variants={cardAnim} animate={controls}>
            <Modal />
          </motion.div>
          <motion.div initial="hidden" variants={cardAnim} animate={controls}>
            <Modal2 />
          </motion.div>
          <motion.div initial="hidden" variants={cardAnim} animate={controls}>
            <Modal3 />
          </motion.div>
          <motion.div initial="hidden" variants={cardAnim} animate={controls}>
            <Modal4 />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
