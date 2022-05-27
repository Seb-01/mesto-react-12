import React from "react";
import {api} from "../../utils/Api";

import Card from "../mesto_card/Card";

function Main(props) {

  // переменные состояния, отвечающие за стейт данных о пользователе. По отдельности!
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  // переменная состояния, отвечающая за стейт данных о карточках
  const [cards, setCards] = React.useState(
    []
  );

  // добавляем эффект, вызываемый при монтировании компонента, который будет совершать
  // запрос в API за пользовательскими данными
  React.useEffect(() => {
    const promiseUser = api.getUserProfile();
    const promiseCards = api.getInitialCards();

    Promise.all([promiseUser, promiseCards])
    // обрабатываем полученные данные
    // деструктурируем ответ от сервера, чтобы было понятнее, что пришло
    .then (([userData, cards]) => {
      // меняем состояние профиля пользователя
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      // карточки загружаем
      setCards(cards);
    })
    .catch((err) => {
      console.log(`Ошибка при запросе данных пользователя и карточек: ${err}!`)
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
            src={userAvatar}
            alt="Аватар пользователя"
          />
        </button>

        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Edit button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
        {cards.map((item,index) => (
          <Card key={index} card={item} onCardClick={props.onCardClick}/>
          )
        )}
      </section>
  </>
  );
}

export default Main;
