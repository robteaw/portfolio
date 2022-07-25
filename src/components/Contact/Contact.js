import React from "react";
import email from "../../images/email.png";
import mobile from "../../images/mobile.png";
import telephone from "../../images/telephone.png";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { textAnim, phoneAnim, contactAnim } from "../../animations";
import { useScroll } from "../useScroll";

function Contact() {
  const [element, controls] = useScroll();

  return (
    <Container className="head-container" id="contact" ref={element}>
      <motion.div
        initial="hidden"
        variants={textAnim}
        animate={controls}
        transition={{
          duration: 1,
        }}
      >
        <h1 className="head-text">Contact</h1>
        <p>Looking for opportunities. Feel free to contact me.</p>
      </motion.div>
      <section className="contact">
        <motion.img
          initial="hidden"
          variants={phoneAnim}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="person-image"
          src={telephone}
          alt={telephone}
        ></motion.img>
        <motion.div
          initial="hidden"
          variants={contactAnim}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="contact-info"
        >
          <div className="row">
            <h2>
              <img src={email} alt={email} />
              Email:
            </h2>
            <a href="mailto: robteaw@gmail.com">
              <h2 className="subject">robteaw@gmail.com</h2>
            </a>
          </div>

          <div className="row">
            <h2>
              <img src={mobile} alt={mobile} />
              Phone:
            </h2>

            <a href="tel: 7132403527">
              <h2 className="subject">713-240-3527</h2>
            </a>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}

export default Contact;

// Styling
const Container = styled.div`
  .contact {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .contact-info .row {
    border-radius: 10px;
    margin: 2rem 0;
    text-align: left;
  }
  .contact-info .row img {
    padding: 0 0.25rem;
  }
  .contact-info .row .subject {
    margin-left: 2.2rem;
    padding: 0.5rem;
    text-align: left;
    cursor: pointer;
  }
  .contact-info .row h2 {
    transition: 0.5s ease-out;
  }
  .contact-info .row h2:hover {
    background-position: -100%;
  }
  .contact-info img {
    height: 1.5rem;
    margin-right: 0.7rem;
  }
  .contact-info a {
    color: var(--btnText);
    text-decoration: none;
  }

  @media (max-width: 950px) {
    .contact {
      display: flex;
      flex-direction: column;
      padding: 0 10%;
    }
    form {
      margin-top: 1.5rem;
    }
  }
  @media (max-width: 650px) {
    .contact {
      display: flex;
      flex-direction: column;
      padding: 0 8%;
    }
  }
`;
