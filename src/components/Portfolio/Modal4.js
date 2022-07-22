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
        <div className="img-four"></div>
        <div className="title">Blog</div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          {/* click outside to close */}
          <div className="modal-content">
            <h2>Blog</h2>
            <p>
              Tea Times is a blog website that provides a place to post and
              leave comments. It utilizes Next js and Tailwind linked to GraphQL
              database.
            </p>
            <div className="modal-links">
              <a
                href="https://github.com/robteaw/react-blog"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
              <a
                href="https://react-blog-steel.vercel.app/"
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
