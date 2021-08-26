import React from "react";
import telephone from "../images/telephone.png";

function Contact() {
  return (
    <div class="head-container" id="contact">
      <h1 className="head-text">Contact</h1>
      <p>Looking for opportunities. Feel free to contact me.</p>
      <section className="contact">
        <img className="person-image" src={telephone} alt={telephone} />
        <form
          name="contact"
          action="/contact"
          method="POST"
          onSubmit="submit"
          className="container"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <input
            required
            className="field"
            name="name"
            type="text"
            placeholder="Full Name"
          />
          <input
            required
            className="field"
            name="email"
            type="email"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button onClick="" type="submit">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
