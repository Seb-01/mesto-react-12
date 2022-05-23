import React from "react";

function Main(props) {

  return (
    <>
      {/* -- profile -- */}
      <section className="profile">
        <button
          className="profile__edit-avatar-button"
          type="button"
          aria-label="Edit button"
          onClick={props.onEditAvatar}
          >
          <img
            className="profile__avatar"
            src={props.avatar}
            alt="Аватар пользователя"
          />
        </button>

        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">{props.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Edit button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{props.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Add button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      {/* elements */}
      <section className="elements">
      </section>
  </>
  );
}

export default Main;
