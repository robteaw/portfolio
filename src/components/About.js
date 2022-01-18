import React from "react";
import book from "../images/book.png";
import html from "../images/html.png";
import css from "../images/css.png";
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

  return (
    <div class="head-container" id="about" ref={element}>
      <motion.h1
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
          variants={bookAnim}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="person-image"
          src={book}
          alt={book}
        ></motion.img>
        <motion.div
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
            <div className="icon html">
              <div className="tooltip">HTML</div>
              <span>
                <img src={html} alt={html} />
              </span>
            </div>

            <div className="icon css">
              <div className="tooltip">CSS</div>
              <span>
                <img src={css} alt={css} />
              </span>
            </div>

            <div className="icon javascript">
              <div className="tooltip">JavaScript</div>
              <span>
                <img src={javascript} alt={javascript} />
              </span>
            </div>

            <div className="icon react">
              <div className="tooltip">React</div>
              <span>
                <img src={react} alt={react} />
              </span>
            </div>

            <div className="icon python">
              <div className="tooltip">Python</div>
              <span>
                <img src={python} alt={python} />
              </span>
            </div>

            <div className="icon sql">
              <div className="tooltip">SQL</div>
              <span>
                <img src={sql} alt={sql} />
              </span>
            </div>

            <div className="icon photoshop">
              <div className="tooltip">Photoshop</div>
              <span>
                <img src={photoshop} alt={photoshop} />
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
