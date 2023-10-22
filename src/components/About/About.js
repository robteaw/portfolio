import React from "react";
import book from "../../images/book.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
// import python from "../../images/python.png";
import sql from "../../images/sql.png";
import photoshop from "../../images/photoshop.png";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { textAnim, bookAnim, skillAnim } from "../../animations";
import { useScroll } from "../useScroll";

export default function About() {
  const [element, controls] = useScroll();
  // Data
  const data = [
    { tooltip: "JavaScript", img: javascript },
    { tooltip: "React", img: react },
    // { tooltip: "Python", img: python },
    { tooltip: "SQL", img: sql },
    { tooltip: "Photoshop", img: photoshop },
  ];

  return (
    <Container className="head-container" id="about" ref={element}>
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
            Hello, welcome! My name is Robert Tea. I am a 2018 graduate with a
            degree in Computer Information Systems. I have some prior
            experiences working in a team, freelancing and personal projects. My
            main focus have been in Java Script and React. Also learning
            Typescript and Next JS.
          </p>
          <h2>Technical Skills</h2>
          <div className="skills-images">
            {data.map((item) => {
              return (
                <div className="icon css">
                  <div className="tooltip">{item.tooltip}</div>
                  <span>
                    <img src={item.img} alt={item.img} />
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </Container>
  );
}

// Styling
const Container = styled.div`
  .about {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .about p {
    width: 100%;
    max-width: 30rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  .about h2 {
    text-align: left;
  }
  .skills-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .skills-images img {
    height: 3rem;
    margin: 1.5rem 0.2rem;
  }
  .skills-images .icon {
    margin: 0 0.75rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 2;
  }
  .skills-images .icon span {
    color: var(--textColor);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 25%;
    display: block;
    position: relative;
    z-index: 2;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .skills-images .icon span i {
    line-height: 60px;
    font-size: 2rem;
  }
  .skills-images .icon .tooltip {
    color: var(--textColor);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    top: 0;
    z-index: 1;
    padding: 10px 18px;
    border-radius: 25px;
    opacity: 0;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .skills-images .icon:hover .tooltip {
    top: -40px;
    opacity: 1;
    pointer-events: auto;
  }
  .icon .tooltip:before {
    background: #fff;
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%) rotate(45deg);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .skills-images .icon:hover span {
    color: #fff;
  }
  .skills-images .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
  }
  .skills-images .html:hover .tooltip,
  .skills-images .html:hover .tooltip:before {
    color: var(--toolText);
    background: var(--toolColor);
  }
  .skills-images .css:hover .tooltip,
  .skills-images .css:hover .tooltip:before {
    color: var(--toolText);
    background: var(--toolColor);
  }
  .skills-images .javascript:hover .tooltip,
  .skills-images .javascript:hover .tooltip:before {
    color: var(--toolText);
    background: var(--toolColor);
  }
  .skills-images .react:hover .tooltip,
  .skills-images .react:hover .tooltip:before {
    color: var(--toolText);
    background: var(--toolColor);
  }
  .skills-images .python:hover .tooltip,
  .skills-images .python:hover .tooltip:before {
    color: var(--toolText);
    background: var(--toolColor);
  }
  .skills-images .sql:hover .tooltip,
  .skills-images .sql:hover .tooltip:before {
    color: var(--toolText);
    background: var(--toolColor);
  }
  .skills-images .photoshop:hover .tooltip,
  .skills-images .photoshop:hover .tooltip:before {
    color: var(--toolText);
    background: var(--toolColor);
  }
  /* Mobile */
  @media (max-width: 1680px) {
    .icon span img {
      padding: 0.3rem;
    }
  }
  @media (max-width: 950px) {
    .about {
      display: flex;
      flex-direction: column;
    }
    p {
      margin-top: 1.5rem;
    }
    .icon span img {
      height: 2.5rem;
    }
  }
`;
