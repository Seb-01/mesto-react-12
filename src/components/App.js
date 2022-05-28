import React from "react";

import logo_mesto_header from '../../src/images/logo_mesto_header.svg';
import avatar from '../../src/images/photo_j_i_kusto.jpg';


import Header from './mesto_header/Header';
import Main from './mesto_main/Main';
import Footer from './mesto_footer/Footer';
import PopupWithForm from './mesto_popupwithform/PopupWithForm';

import ImagePopup from "./mesto_imagepopup/ImagePopup";


function App() {

  // переменная состояния, отвечающая за полноразмерную картинку
  // {} т.к. ожидаем что здесь будет объект с данными карточки
  const [selectedCard, setSelectedCard] = React.useState({});


  // обработчики нажатия на карточку
  function handleCardClick (card) {
    setSelectedCard(card);
  }

  // переменные состояния, отвечающие за видимость трёх попапов
  const [popups, setPopups] = React.useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false
  });

  // обработчики нажатия на кнопки
  function handleEditAvatarClick (evt) {
    setPopups({
      ...popups, // здесь мы копируем текущее состояние объекта
      isEditAvatarPopupOpen: true //здесь перезаписываем свойство isEditAvatarPopupOpen
    });
  }


  function handleEditProfileClick (evt) {
    setPopups({
      ...popups, // здесь мы копируем текущее состояние объекта
      isEditProfilePopupOpen: true, //здесь перезаписываем свойство isEditProfilePopupOpen
    });
  }

  function handleAddPlaceClick (evt) {
    setPopups({
      ...popups, // здесь мы копируем текущее состояние объекта
      isAddPlacePopupOpen: true, //здесь перезаписываем свойство isAddPlacePopupOpen
    });
  }

  // закрытие попапов
  function closeAllPopups (evt) {
    setPopups({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false
    });

    setSelectedCard({});
  }


  return (
    <div className="page">

    <Header logo={logo_mesto_header}/>

    <Main avatar={avatar} name="Жак-Ив Кусто" about="Исследователь океана"
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick} />

    <Footer/>

    {/* popups */}
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonSubmitText="Cохранить"
      isOpen={popups.isEditProfilePopupOpen}
      onClose={closeAllPopups}>
      <fieldset className="popup__info">
        <label className="popup__field">
          <input
            id="name-input"
            type="text"
            className="popup__input popup__input_field_name"
            value=""
            name="name"
            placeholder="Введите имя"
            minlenght="2"
            maxlenght="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="job-input"
            type="text"
            className="popup__input popup__input_field_job"
            value=""
            name="job"
            placeholder="Введите род занятий"
            minlenght="2"
            maxlenght="200"
            required
          />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm name="add-place" title="Новое место" buttonSubmitText="Cоздать"
      isOpen={popups.isAddPlacePopupOpen}
      onClose={closeAllPopups}>
      <fieldset className="popup__info">
        <label className="popup__field">
          <input
            id="mesto-name-input"
            type="text"
            className="popup__input popup__input_field_mesto-name"
            value=""
            name="name"
            placeholder="Название"
            minlenght="2"
            maxlenght="30"
            required
          />
          <span className="popup__input-error mesto-name-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="link-input"
            className="popup__input popup__input_field_link"
            value=""
            name="link"
            placeholder="Сcылка на картинку"
            type="url"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </label>
        </fieldset>
    </PopupWithForm>

    <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonSubmitText="Cохранить"
      isOpen={popups.isEditAvatarPopupOpen}
      onClose={closeAllPopups}>
      <fieldset className="popup__info">
        <label className="popup__field">
          <input
            id="avatar-link-input"
            className="popup__input popup__input_field_link"
            value=""
            name="link"
            placeholder="Сcылка на аватар"
            type="url"
            required
          />
          <span className="popup__input-error avatar-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm name="confirm-delete" title="Вы уверены?" buttonSubmitText="Да"/>

    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

  </div>
  );
}

export default App;
