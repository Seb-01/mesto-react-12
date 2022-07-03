import React from "react";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={props.logo} alt="Лого Mesto Russia" />
      <div className="header__authorization-place">
        <p className="header__email">{props.email}</p>
        <button
          className="header__link-button"
          type="button"
          aria-label="Link button"
          onClick={props.onLink}
        >
          {props.label}
        </button>
      </div>
    </header>
  );
}

export default Header;
