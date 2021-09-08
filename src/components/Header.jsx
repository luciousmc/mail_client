import { IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Logo"
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="search" placeholder="Search Mail" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right"></div>
    </header>
  );
}

export default Header;
