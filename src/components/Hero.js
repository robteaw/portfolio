import React from "react";
import laptop from "../images/laptop.png";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { container, titleAnim, imgAnim, scrollAnim } from "../animations";
import { useScroll } from "../components/useScroll";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  const [element, controls] = useScroll();

  return (
    <Container>
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
      <motion.div variants={scrollAnim}>
        <ScrollDown />
      </motion.div>
    </Container>
  );
}

// Styling
const Container = styled.div`
  .hero {
    height: 60vh;
    width: 100%;
    padding: 0 20%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .hero-text {
    font-weight: bold;
    text-align: center;
    /* text-shadow: 4px 4px 1px #073569; */
    text-align: left;
  }

  .hero-text h1 {
    color: var(--heroColor);
    background: repeating-linear-gradient(
      -45deg,
      #dc143c 0%,
      #ff7f50 7.14%,
      yellow 14.28%,
      #00ff00 21.4%,
      cyan 28.56%,
      #1e90ff 35.7%,
      magenta 42.84%,
      #dc143c 50%
    );
    background-size: 600vw 600vw;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: slide 9s linear infinite forwards;
  }
  @keyframes slide {
    0% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 600vw;
    }
  }

  .second-text {
    color: var(--headColor);
    line-height: 2rem;
    margin-top: 1.5rem;
  }

  .hero p {
    color: var(--heroColor2);
    font-size: 1.1rem;
    padding: 1rem 0;
  }

  .hero button {
    color: var(--btnText);
    background: transparent;
    width: 8rem;
    margin-top: 1.5rem;
    border: 1px solid var(--btnText);
    background-size: 200%;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.75rem;
    outline: none;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.5s ease-out;
  }

  .hero button:hover {
    color: var(--bgColor);
    background: #00bfff;
    border: 1px solid transparent;
  }

  .hero .emoji {
    color: none;
    font-size: 25px;
    font-weight: normal; /* bold attribute from being applied on this class */
    animation: waving-hand 2.5s infinite;
    transform-origin: 70% 70%;
    display: inline-block; /* allows animation to work in span */
  }

  @keyframes waving-hand {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 995px) {
    .hero {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;
