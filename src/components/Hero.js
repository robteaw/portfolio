import React from "react";
import laptop from "../images/laptop.png";
// Animation
import { motion } from "framer-motion";
import { container, titleAnim, imgAnim } from "../animations";
import { useScroll } from "../components/useScroll";

function Hero() {
  const [element, controls] = useScroll();

  return (
    <div>
      <section className="hero" id="hero" ref={element}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="title"
        >
          <div className="hero-text">
            <motion.p variants={titleAnim}>
              Hi <span className="emoji">👋</span> my name is
            </motion.p>
            <motion.h1 variants={titleAnim} className="first-text">
              Robert Tea
            </motion.h1>
            <motion.h2 variants={titleAnim} className="second-text">
              Web Developer
            </motion.h2>
            <a href="#contact">
              <motion.button variants={titleAnim}>Say Hi</motion.button>
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="title"
        >
          <motion.img
            variants={imgAnim}
            className="person-image"
            src={laptop}
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
