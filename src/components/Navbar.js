import React from "react";
import logo from "../images/logo2.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar" id="navbar">
        <div className="navbar__container">
          <a href="#" className="navbar__logo">
            <img src={logo} alt={logo} />
          </a>
          <div className="navbar__toggle" id="mobile-menu">
            <span className="bar"></span> <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a href="#" className="navbar__links">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#about" className="navbar__links">
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#portfolio" className="navbar__links">
                Portfolio
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact" className="navbar__links">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
