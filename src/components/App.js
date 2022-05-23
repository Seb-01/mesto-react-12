import React from "react";

import logo_mesto_header from '../../src/images/logo_mesto_header.svg';
import avatar from '../../src/images/photo_j_i_kusto.jpg';


import Header from './mesto_header/Header';
import Main from './mesto_main/Main';
import Footer from './mesto_footer/Footer';
import PopupWithForm from './mesto_popupwithform/PopupWithForm';

import ImagePopup from "./mesto_imagepopup/ImagePopup";


function App() {

  // обработчики
  function handleEditAvatarClick (evt) {
    document.querySelector('.popup_target_edit-avatar').classList.add('popup_opened');
  }


  function handleEditProfileClick (evt) {
    document.querySelector('.popup_target_edit-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick (evt) {
    document.querySelector('.popup_target_add-place').classList.add('popup_opened');
  }


  return (
    <div className="page">

    <Header logo={logo_mesto_header}/>

    <Main avatar={avatar} name="Жак-Ив Кусто" about="Исследователь океана"
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick} />

    <Footer/>

    {/* popups */}
    <PopupWithForm name="edit-profile" title="Редактировать профиль">
      <fieldset className="popup__info">
        <label className="popup__field">
          <input
            id="name-input"
            type="text"
            className="popup__input popup__input_field_name"
            value=""
            name="name"
            placeholder="Введите имя"
            minlength="2"
            maxlength="40"
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
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm name="add-place" title="Новое место">
      <fieldset className="popup__info">
        <label className="popup__field">
          <input
            id="mesto-name-input"
            type="text"
            className="popup__input popup__input_field_mesto-name"
            value=""
            name="name"
            placeholder="Название"
            minlength="2"
            maxlength="30"
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

    <PopupWithForm name="edit-avatar" title="Обновить аватар">
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

    <PopupWithForm name="confirm-delete" title="Вы уверены?"/>

    <ImagePopup/>



    {/* card-template */}
    <template id="card-template">
      <article className="elements__card">
        <button
          className="elements__trash-button"
          type="button"
          aria-label="Trash button"
        ></button>
        <img className="elements__photo" src="#" alt="" />
        <div className="elements__wrapper">
          <h2 className="elements__title">Карточка</h2>
          <div className="elements__like-zone-wrapper">
            <button
              className="elements__like-button"
              type="button"
              aria-label="Like button"
            ></button>
            <p className="elements__likes-number">0</p>
          </div>
        </div>
      </article>
    </template>

  </div>
  );
}

export default App;
