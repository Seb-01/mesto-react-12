import React from "react";
import { api } from "../../utils/Api";

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

  //обработчик клика на кнопку лайк
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        // теперь нужно эту карточку в нашем стейте найти и проапдейтить. Это вызовет ее перерисовку!
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  //обработчик удаления карточки
  function handleCardDelete(card) {
    // Отправляем запрос в API на удаление карточки
    api.deleteCard(card._id)
      .then(() => {
        // теперь нужно эту карточку убрать из нашего стейта. Это вызовет ее перерисовку (удаление из DOM)!
        // создаем копию массива, исключив из него удалённую карточку
        // колбэк обновит существующую коллекцию из стейта — на вход идет значение текущего стейта,
        // на выход — не совершенно новое (ключи!), а обновленное значение (коллекция без удаляемой карточки):
        setCards(cards => cards.filter(c => c.owner._id !== currentUser._id));
    });
  }

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
          <Card key={item._id} card={item} onCardClick={props.onCardClick} onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}/>
          )
        )}
      </section>
  </>
  );
}

export default Main;
