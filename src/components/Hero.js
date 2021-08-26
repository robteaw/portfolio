import React from "react";
import laptop from "../images/laptop.png";

function Hero() {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="hero-text">
          <p>Hi, my name is</p>
          <h1 className="first-text">Robert Tea</h1>
          {/* <h1 class="second-text">Web Developer</h1>  */}
        </div>
        <img className="person-image" src={laptop} />
      </section>
    </div>
  );
}

export default Hero;
