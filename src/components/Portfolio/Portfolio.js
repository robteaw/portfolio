import React from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";
// Animation
import { motion } from "framer-motion";
import { textAnim, cardAnim } from "../../animations";
import { useScroll } from "../useScroll";

export default function Portfolio() {
  const [element, controls] = useScroll();

  return (
    <>
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
            <Modal6 />
          </motion.div>
          <motion.div initial="hidden" variants={cardAnim} animate={controls}>
            <Modal />
          </motion.div>
          <motion.div initial="hidden" variants={cardAnim} animate={controls}>
            <Modal5 />
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
    </>
  );
}
