import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_target_${props.name}`}  >
      {/* Правильно подставляем имя формы! */}
      {/* edit-avatar (EditAvatar),  edit-profile (EditProfile),  add-place (AddPlace), confirm-delete (ConfirmDelete) */}

      <div className="popup__container">
        <form name={props.name} className={`popup__form popup__${props.name}-form`}>
          <h2 className="popup__title">{props.title}</h2>

          {/* тут будет вложенное содержимое в виде JSX-разметки */}
          {props.children}

          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close button"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm
