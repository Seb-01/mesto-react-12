import React from "react";
import Form from "../Form/Form";
import { apiAuth } from "../../utils/Api";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  // Добавляем стейты, которые привяжем к полям ввода (управляемые компоненты) в форме
  // name
  const [email, setEmail] = React.useState("");
  // description
  const [password, setPassword] = React.useState("");

  //обработчик изменения input
  function handleChange(event) {
    const target = event.target;
    // обновляем стейты в зависимости от имени поля: email или password
    target.name === "email"
      ? setEmail(target.value)
      : setPassword(target.value);
  }

  // обработчик Submit формы
  function handleSubmit(event) {
    event.preventDefault();

    // сюда добавим логику обработки формы регистрации
    // Отправляем запрос в API регистрацию пользователя

    apiAuth
      .login(password, email)
      // здесь уже данные пользователя от сервера
      .then((data) => {
        if (data.token) {
          setEmail("");
          setPassword("");
          props.handleLogin(email);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(`Ошибка при регистрации пользователя: ${err}!`);
      });
  }

  return (
    <Form
      name={props.name}
      title={props.title}
      email={email}
      password={password}
      buttonSubmitText={props.buttonSubmitText}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

export default Login;
