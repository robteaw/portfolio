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
        <div className="img-five"></div>
        <div className="title">Ecommerce</div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          {/* click outside to close */}
          <div className="modal-content">
            <h2>Ecommerce</h2>
            <p>
              Boba Drunk is an ecommerce website that allows the user to place
              an order and look for an item through a filter search.
            </p>
            <div className="modal-links">
              <a
                href="https://github.com/robteaw/boba"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
              <a
                href="https://glowing-boba-0c4fbe.netlify.app/"
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
