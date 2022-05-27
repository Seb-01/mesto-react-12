import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="elements__card">
      <button
        className="elements__trash-button"
        type="button"
        aria-label="Trash button"
      ></button>
      <img className="elements__photo" src={props.card.link} alt={props.card.name}
        // не забываем добавить обработчик клика на карточке
        onClick={handleClick}/>
      <div className="elements__wrapper">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-zone-wrapper">
          <button
            className="elements__like-button"
            type="button"
            aria-label="Like button"
          ></button>
          <p className="elements__likes-number">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
