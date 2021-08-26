import React from "react";
import book from "../images/book.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import python from "../images/python.png";
import sql from "../images/sql.png";
import photoshop from "../images/photoshop.png";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <img className="person-image" src={book} />
        <div className="right">
          <p>
            Looking for a developer position to contribute my knowledge and
            skill for the company while gaining professional experience. I was
            introduced to programming back in college and realized the
            importance of Python relative to my work. Prior experience was from
            self-taught and personal clients.
          </p>
          <h2>Technical Skills</h2>
          <div className="skills-images">
            <div className="icon html">
              <div className="tooltip">HTML</div>
              <span>
                <img src={html} alt={html} />
              </span>
            </div>

            <div className="icon css">
              <div className="tooltip">CSS</div>
              <span>
                <img src={css} alt={css} />
              </span>
            </div>

            <div className="icon javascript">
              <div className="tooltip">JavaScript</div>
              <span>
                <img src={javascript} alt={javascript} />
              </span>
            </div>

            <div className="icon react">
              <div className="tooltip">React</div>
              <span>
                <img src={react} alt={react} />
              </span>
            </div>

            <div className="icon python">
              <div className="tooltip">Python</div>
              <span>
                <img src={python} alt={python} />
              </span>
            </div>

            <div className="icon sql">
              <div className="tooltip">SQL</div>
              <span>
                <img src={sql} alt={sql} />
              </span>
            </div>

            <div className="icon photoshop">
              <div className="tooltip">Photoshop</div>
              <span>
                <img src={photoshop} alt={photoshop} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
