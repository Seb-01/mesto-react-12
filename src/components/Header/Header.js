import React from "react";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={props.logo} alt="Лого Mesto Russia" />
    </header>
  );
}

export default Header;
