import logo_mesto_header from '../../src/images/logo_mesto_header.svg';

import './App.css';

function App() {
  return (
    <div className="page">
    <header className="header">
       <img
        className="header__logo"
        src={logo_mesto_header}
        alt="Лого Mesto Russia"
      />
    </header>

    <main>
      {/* -- profile -- */}
      <section className="profile">
        <button
          className="profile__edit-avatar-button"
          type="button"
          aria-label="Edit button"
        >
          <img
            className="profile__avatar"
            src="<%=require('./images/photo_j_i_kusto.jpg')%>"
            alt="Аватар пользователя"
          />
        </button>

        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title"></h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Edit button"
            ></button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Add button"
        ></button>
      </section>

      {/* elements */}
      <section className="elements"></section>
    </main>

    {/* footer */}
    <footer className="footer">
      <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
    </footer>

    {/* popup */}
    <div className="popup popup_target_profile">
      {/* Форма редактирования профиля */}
      <div className="popup__container">
        <form name="profile-edit" className="popup__form popup__edit-profile-form">
          <h2 className="popup__title">Редактировать профиль</h2>
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
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close button"
        ></button>
      </div>
    </div>

    {/* popup */}
    <div className="popup popup_target_add-item">
      {/* Форма добавления новой карточки */}
      <div className="popup__container">
        <form name="new-item-form" className="popup__form popup__add-item-form">
          <h2 className="popup__title">Новое место</h2>
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
          <button className="popup__save-button" type="submit">Создать</button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close button"
        ></button>
      </div>
    </div>

    {/* popup c картинкой*/}
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

    {/* popup Вы уверены? */}
    <div className="popup popup_target_confirm">
      {/* Форма подтверждения удаления карточки */}
      <div className="popup__container">
        <form
          name="confirm-delete"
          className="popup__form popup__delete-confirm-form"
        >
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__save-button" type="submit">Да</button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close button"
        ></button>
      </div>
    </div>

    {/* popup */}
    <div className="popup popup_target_update-avatar">
      {/* Форма обновления аватара */}
      <div className="popup__container">
        <form
          name="update-avatar"
          className="popup__form popup__update-avatar-form"
        >
          <h2 className="popup__title">Обновить аватар</h2>
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
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close button"
        ></button>
      </div>
    </div>

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
          <h2 className="elements__title"></h2>
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
