import React from "react";

function PopupWithoutForm(props) {
  return (
    <div
      className={`popup popup_target_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <form
          name={props.name}
          className={`popup__form popup__${props.name}-form`}
        >
          {/* тут будет вложенное содержимое в виде JSX-разметки */}
          {props.children}
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithoutForm;
