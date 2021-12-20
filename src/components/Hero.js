import React from "react";
import laptop from "../images/laptop.png";

function Hero() {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="hero-text">
          <p>
            Hi <span className="emoji">👋</span> my name is
          </p>
          <h1 className="first-text">Robert Tea</h1>
          <h2 className="second-text">Web Developer</h2>
          <a href="#contact">
            <button>Say Hi</button>
          </a>
        </div>
        <img className="person-image" src={laptop} />
      </section>
    </div>
  );
}

export default Hero;
