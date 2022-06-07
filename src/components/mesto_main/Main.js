import React from "react";
import {api} from "../../utils/Api";

import Card from "../mesto_card/Card";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {

  // подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // переменная состояния, отвечающая за стейт данных о карточках
  const [cards, setCards] = React.useState(
    []
  );

  // добавляем эффект, вызываемый при монтировании компонента, который будет совершать
  // запрос в API за карточками
  React.useEffect(() => {
    api.getInitialCards()

    // обрабатываем полученные данные деструктурируем ответ от сервера, чтобы было понятнее, что пришло
    .then ((cards) => {
      // карточки загружаем
      setCards(cards);
    })
    .catch((err) => {
      console.log(`Ошибка при запросе карточек: ${err}!`)
    });

  }, []);

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
            src={currentUser.avatar}
            alt="Аватар пользователя"
          />
        </button>

        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Edit button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
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
        {/* карточки отображаем */}
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick}/>
          )
        )}
      </section>
  </>
  );
}

export default Main;
