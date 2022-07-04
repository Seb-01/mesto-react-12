import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={props.logo} alt="Лого Mesto Russia" />
      <div className="header__authorization-place">
        <p className="header__email">{props.email}</p>

        <NavLink
          exact
          to="/"
          activeClassName="header__link_active"
          className="header__link"
        >
          <button
            className="header__link-button"
            type="button"
            aria-label="Link button"
            onClick={props.signOut}
          >
            Выйти
          </button>
        </NavLink>

        <NavLink
          exact
          to="/sign-in"
          activeClassName="header__link_active"
          className="header__link"
        >
          <button
            className="header__link-button"
            type="button"
            aria-label="Link button"
            onClick={props.signOut}
          >
            Войти
          </button>
        </NavLink>
        <NavLink
          exact
          to="/sign-up"
          activeClassName="header__link_active"
          className="header__link"
        >
          <button
            className="header__link-button"
            type="button"
            aria-label="Link button"
            onClick={props.signOut}
          >
            Регистрация
          </button>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
