import React from "react";
import { Route, Link, Switch } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={props.logo} alt="Лого Mesto Russia" />
      <div className="header__authorization-place">
        <p className="header__email">{props.email}</p>
        <Switch>
          <Route exact path="/">
            {/* <Link
              to="/sign-in"
              //activeClassName="header__link_active"
              className="header__link"
            > */}
            <button
              className="header__link-button"
              type="button"
              aria-label="Link button"
              onClick={props.onSignOut}
            >
              Выйти
            </button>
            {/* </Link> */}
          </Route>

          <Route path="/sign-up">
            <Link
              to="/sign-in"
              //activeClassName="header__link_active"
              className="header__link"
            >
              Войти
              {/* <button
              className="header__link-button"
              type="button"
              aria-label="Link button"
              onClick={props.goToRegister}
            >
              Регистрация
            </button> */}
            </Link>
          </Route>

          <Route path="/sign-in">
            <Link
              to="/sign-up"
              //activeClassName="header__link_active"
              className="header__link"
            >
              Регистрация
              {/* <button
              className="header__link-button"
              type="button"
              aria-label="Link button"
              onClick={props.signOut}
            >
              Войти
            </button> */}
            </Link>
          </Route>
        </Switch>
      </div>
    </header>
  );
}

export default Header;
