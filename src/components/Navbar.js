import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo2.png";
// Animation
import { motion } from "framer-motion";
import { logoAnim, linkAnim } from "../animations";
import { useScroll } from "../components/useScroll";

export default function Navbar() {
  const [element, controls] = useScroll();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <motion.nav
          initial="hidden"
          animate={controls}
          className="navbar"
          ref={element}
        >
          <div className="navbar-container container">
            <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
              <motion.img
                variants={logoAnim}
                src={logo}
                alt="logo"
              ></motion.img>
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <motion.li variants={linkAnim} className="nav-item">
                <a href="#" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </a>
              </motion.li>
              <motion.li variants={linkAnim} className="nav-item">
                <a
                  href="#about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </motion.li>
              <motion.li variants={linkAnim} className="nav-item">
                <a
                  href="#portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </a>
              </motion.li>
              <motion.li variants={linkAnim} className="nav-item">
                <a
                  href="#contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </div>
        </motion.nav>
      </IconContext.Provider>
    </>
  );
}
