import React from "react";
import Form from "../Form/Form";
import { apiAuth } from "../../utils/Api";
import { Link, withRouter } from "react-router-dom";

class Registration extends React.Component {
  constructor(props) {
    // Добавляем стейты, которые привяжем к полям ввода (управляемые компоненты) в форме
    super(props);
    this.state = {
      password: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //обработчик изменения input
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // обработчик Submit формы
  handleSubmit(event) {
    event.preventDefault();

    // сюда добавим логику обработки формы регистрации
    // Отправляем запрос в API регистрацию пользователя

    // применим синтаксис деструктуризации к this.state
    const { password, email } = this.state;
    apiAuth
      .register(password, email)
      // здесь уже данные пользователя от сервера
      .then((res) => {
        console.log(res);
        if (res) {
          this.setState(
            {
              message: "",
            },
            () => {
              this.props.history.push("/sign-in");
            }
          );
        } else {
          this.setState({
            message: "Что-то пошло не так!",
          });
        }
      })
      .catch((err) => {
        console.log(`Ошибка при регистрации пользователя: ${err}!`);
      });
  }

  render() {
    return (
      <>
        <Form
          name={this.props.name}
          title={this.props.title}
          email={this.state.email}
          password={this.state.password}
          buttonSubmitText={this.props.buttonSubmitText}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <Link to="/sign-in" className="form__login-link">
            Уже зарегистрированы? Войти
          </Link>
        </Form>
      </>
    );
  }
}

export default withRouter(Registration);
