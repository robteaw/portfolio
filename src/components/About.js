import React from "react";
import book from "../images/book.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import python from "../images/python.png";
import sql from "../images/sql.png";
import photoshop from "../images/photoshop.png";
// Animation
import { motion } from "framer-motion";
import { textAnim, bookAnim, skillAnim } from "../animations";
import { useScroll } from "../components/useScroll";

function About() {
  const [element, controls] = useScroll();
  // Data
   const data = [
    {tooltip: "JavaScript", img: javascript},
    {tooltip: "React", img: react},
    {tooltip: "Python", img: python},
    {tooltip: "SQL", img: sql},
    {tooltip: "Photoshop", img: photoshop}
  ]

  return (
    <div class="head-container" id="about" ref={element}>
      <motion.h1
        initial="hidden"
        variants={textAnim}
        animate={controls}
        transition={{
          duration: 1,
        }}
        className="head-text"
      >
        About
      </motion.h1>
      <section className="about">
        <motion.img
          initial="hidden"
          variants={bookAnim}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="person-image"
          src={book}
          alt={book}
        ></motion.img>
        <motion.div
          initial="hidden"
          variants={skillAnim}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="right"
        >
          <p>
            Hello, welcome! My name is Robert Tea. I was introduced to
            programming back in college majoring in Computer Information Systems
            and realized I had an interest in web development. Having worked a
            bit with Python in my current work, I develop some experiences.
            Also, prior experiences includes self-taught and personal clients.
          </p>
          <h2>Technical Skills</h2>
          <div className="skills-images">
            {data.map((item) =>  {
              return (
                <div className="icon css">
                <div className="tooltip">{item.tooltip}</div>
                <span>
                  <img src={item.img} alt={item.img} />
                </span>
              </div> 
              ); 
            })
            }
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
