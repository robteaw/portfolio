import React from "react";
import telephone from "../images/telephone.png";

function Contact() {
  return (
    <div class="head-container" id="contact">
      <h1 className="head-text">Contact</h1>
      <p>Looking for opportunities. Feel free to contact me.</p>
      <section className="contact">
        <img className="person-image" src={telephone} alt={telephone} />
        <div className="contact-info">
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
        </div>
      </section>
    </div>
  );
}

export default Contact;
