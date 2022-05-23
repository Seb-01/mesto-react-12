import React from "react";

function ImagePopup(props) {
  return (
    <div className="popup popup_target_picture-view">
      <div className="popup__picture-container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close button"
        ></button>
        <figure className="popup__figure-picture">
          <img className="popup__picture" src="#" alt="" />
          <figcaption className="popup__figure-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
