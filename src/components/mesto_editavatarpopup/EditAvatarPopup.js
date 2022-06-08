import React from "react";
import PopupWithForm from "../mesto_popupwithform/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditAvatarPopup(props) {

  // подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // Добавляем стейты, которые привяжем к полям ввода (управляемые компоненты) в форме
  // name
  const [avatar, setAvatar] = React.useState(currentUser.avatar);

  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  // записываем объект, возвращаемый хуком, в переменную
  // этот объект присваиваем элементу input с помощью атрибута ref, чтобы получить доступ к нему и его значению
  const avatarLink = React.useRef();

  //обработчик изменения input
  function handleChange() {
    // в поле current React запишет указатель на DOM-элемент, когда будет формировать DOM-дерево
    setAvatar(avatarLink.current.value);
  }


  // обработчик Submit формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
      link: avatar
    });
  }

  return (
    <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonSubmitText="Cохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className="popup__info">
        <label className="popup__field">
          <input
            id="avatar-link-input"
            className="popup__input popup__input_field_link"
            value={avatar}
            name="link"
            placeholder="Сcылка на аватар"
            type="url"
            required
            onChange={handleChange}
            ref={avatarLink}
          />
          <span className="popup__input-error avatar-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>

  );

}

export default EditAvatarPopup;
