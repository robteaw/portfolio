import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  // it's on false because when you start you don't want to see the button but only when you click the button
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="card btn-modal" onClick={toggleModal}>
        <div className="img-two"></div>
        <div className="title">Photography</div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          {/* click outside to close */}
          <div className="modal-content">
            <h2>Photography</h2>
            <p>
              Ren Tea Photography is a photography website built for my sister
              that displays a bit about her and some of her works as a freelance
              photographer. It uses Lightbox for the images in the Portfolio
              page and Framer Motion for the animations.
            </p>
            <div className="modal-links">
              <a
                href="https://github.com/robteaw/photography"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
              <a
                href="https://ecstatic-elion-18be7a.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
