import React from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";

function Portfolio() {
  return (
    <div>
      <div className="head-container" id="portfolio">
        <h1 className="head-text">Portfolio</h1>
      </div>
      <section className="portfolio">
        <div className="card-container">
          <Modal />
          <Modal2 />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
