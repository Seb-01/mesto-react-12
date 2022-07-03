import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={props.logo} alt="Лого Mesto Russia" />
      <div className="header__authorization-place">
        <p className="header__email">{props.email}</p>
        <nav>
          <NavLink
            exact
            to="/"
            activeClassName="header__link_active"
            className="header__link"
          >
            Выйти
          </NavLink>

          <NavLink
            exact
            to="/sign-in"
            activeClassName="header__link_active"
            className="header__link"
          >
            Войти
          </NavLink>
          <NavLink
            exact
            to="/sign-up"
            activeClassName="header__link_active"
            className="header__link"
          >
            Регистрация
          </NavLink>
        </nav>

        {/* <button
          className="header__link-button"
          type="button"
          aria-label="Link button"
          onClick={props.onLink}
        >
          {props.label}
        </button> */}
      </div>
    </header>
  );
}

export default Header;
