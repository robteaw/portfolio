import React from "react";
import telephone from "../images/telephone.png";
// Animation
import { motion } from "framer-motion";
import { textAnim, phoneAnim, contactAnim } from "../animations";
import { useScroll } from "../components/useScroll";

function Contact() {
  const [element, controls] = useScroll();

  return (
    <div class="head-container" id="contact" ref={element}>
      <motion.div
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
          variants={phoneAnim}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="person-image"
          src={telephone}
          alt={telephone}
        ></motion.img>
        <motion.div
          variants={contactAnim}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="contact-info"
        >
          <div className="row">
            <h2>
              <i class="far fa-envelope"></i> Email:
            </h2>
            <a href="mailto: robteaw@gmail.com">
              <h2 className="subject">robteaw@gmail.com</h2>
            </a>
          </div>

          <div className="row">
            <h2>
              <i class="fas fa-mobile-alt"></i> Phone:
            </h2>

            <a href="tel: 7132403527">
              <h2 className="subject">713-240-3527</h2>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
