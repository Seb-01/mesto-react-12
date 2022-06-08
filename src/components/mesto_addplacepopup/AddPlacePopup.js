import React from "react";
import PopupWithForm from "../mesto_popupwithform/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function AddPlacePopup(props) {

  // подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // Добавляем стейты, которые привяжем к полям ввода (управляемые компоненты) в форме
  // name
  const [name, setName] = React.useState('');
  // link
  const [link, setLink] = React.useState('');


  // записываем объект, возвращаемый хуком, в переменную
  // этот объект присваиваем элементу input с помощью атрибута ref, чтобы получить доступ к нему и его значению
  const nameCard = React.useRef();
  const linkCard = React.useRef();

  //обработчик изменения input
  function handleChange(event) {
    const target = event.target;
    // в поле current React запишет указатель на DOM-элемент, когда будет формировать DOM-дерево
    // обновляем стейты в зависимости от имени поля: name или link
    target.name === "name" ? setName(nameCard.current.value) : setLink(linkCard.current.value);
  }

  // обработчик Submit формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: name,
      link: link
    });
  }

  return (
    <PopupWithForm name="add-place" title="Новое место" buttonSubmitText="Cоздать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className="popup__info">
        <label className="popup__field">
          <input
            id="mesto-name-input"
            type="text"
            className="popup__input popup__input_field_mesto-name"
            value={name}
            name="name"
            placeholder="Название"
            minlenght="2"
            maxlenght="30"
            required
            onChange={handleChange}
            ref={nameCard}
          />
          <span className="popup__input-error mesto-name-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="link-input"
            className="popup__input popup__input_field_link"
            value={link}
            name="link"
            placeholder="Сcылка на картинку"
            type="url"
            required
            onChange={handleChange}
            ref={linkCard}
          />
          <span className="popup__input-error link-input-error"></span>
        </label>
        </fieldset>
  </PopupWithForm>

  );

}

export default AddPlacePopup;
