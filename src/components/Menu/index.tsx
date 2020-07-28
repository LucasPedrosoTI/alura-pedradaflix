import React from "react";
import Logo from "../../assets/logo.png";

import "./menu.css";
import ButtonLink from "../ButtonLink";

const Menu = () => {
  return (
    <nav className="menu">
      <ButtonLink href="/" className="">
        <img className="logo" src={Logo} alt="logo" />
      </ButtonLink>

      <ButtonLink className="button_link" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
};

export default Menu;
