import React, { useState } from "react";
import Data from "./Data";

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
        <div className="img-one"></div>
        <div className="title">SEO</div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          {/* click outside to close */}
          <div className="modal-content">
            <h2>SEO</h2>
            <p>
              Apelinks is a website that was recreated from scratch for a
              colleague of mine who originally built his website on Wix. The
              whole website has a completely different design and updated using
              React.
            </p>
            <div className="modal-links">
              <a
                href="https://github.com/robteaw/ape-links2"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
              <a
                href="https://musing-haibt-5619e2.netlify.app/"
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
