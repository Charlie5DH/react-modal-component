import React from "react";
import reading from "../images/reading.png";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={reading} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p>Do you want</p>
            <h1>$10 CREDIT</h1>
            <p>to support our reading bookclub</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love the Bookclub
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, thanks, next time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
