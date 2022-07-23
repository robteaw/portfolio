import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo2.png";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { logoAnim, linkAnim } from "../animations";
import { useScroll } from "../components/useScroll";

export default function Navbar() {
  const [element, controls] = useScroll();
  const [click, setClick] = useState(false);

  // Close nav menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Change nav color on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav
        as={motion.nav}
        initial="hidden"
        animate={controls}
        className={color ? "navbar nav-scroll" : "navbar"}
        ref={element}
      >
        <div className="navbar-container container">
          {/* Logo */}
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            <motion.img variants={logoAnim} src={logo} alt="logo"></motion.img>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          {/* Links */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <motion.li variants={linkAnim} className="nav-item">
              <a href="#" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </motion.li>
            <motion.li variants={linkAnim} className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>
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
            {/* Icon */}
            <div class="icon">
              <a
                href="https://www.linkedin.com/in/robert-tea-4866a2146/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/robteaw"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </ul>
        </div>
      </Nav>
    </IconContext.Provider>
  );
}

// Styling
const Nav = styled.nav`
  background: var(--bgColor);
  text-transform: uppercase;
  height: 4.375rem;
  width: 100%;
  padding: 0.3rem 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  .navbar-container {
    display: flex;
    justify-content: space-between;
    height: 5rem;
  }
  .container {
    z-index: 1;
    width: 100%;
    max-width: 81.25rem;
    margin-right: auto;
    margin-left: auto;
    padding-right: 3.125rem;
    padding-left: 3.125rem;
  }
  .navbar-logo img {
    height: 3rem;
    margin-top: 1rem;
    justify-self: start;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
  }
  .navbar-icon {
    margin-right: 0.5rem;
  }
  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    justify-content: end;
  }
  .nav-item {
    font-weight: 500;
    height: 5rem;
    border-bottom: 2px solid transparent;
    padding: 0 0.25rem;
  }
  .nav-links {
    color: var(--mainColor);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem 2rem;
    height: 100%;
  }
  .nav-links:hover {
    color: var(--hoverColor);
  }
  .fa-bars {
    color: var(--mainColor);
  }
  .menu-icon {
    display: none;
  }
  .icon i {
    color: var(--btnText);
    margin-top: 1rem;
    margin-left: 1.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: var(--btnColor);
    }
  }

  @media (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 4.375rem; /* removes the spacing in navbar and menu */
      left: -100%;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background: var(--bgColor2);
      left: 0;
      transition: all 0.6s ease;
      z-index: 999;
      outline: none;
      border: 0;
    }
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
    .nav-item:hover {
      border: none;
    }
    .nav-item {
      width: 100%;
    }
    .nav-item:nth-child(1) {
      margin-top: 3.5rem;
    }
    .nav-item:nth-child(4) {
      margin-bottom: 3.5rem;
    }
    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      margin-left: 2rem;
      transform: translate(25%, 50%);
    }
    .menu-icon {
      display: block;
      position: absolute;
      margin-top: 0.5rem;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
    .fa-times {
      color: var(--mainColor);
      font-size: 2rem;
    }
    .nav-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 7.5rem;
    }
    #mobile-menu.is-active .bar:nth-child(2) {
      opacity: 0;
    }
    #mobile-menu.is-active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    #mobile-menu.is-active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
