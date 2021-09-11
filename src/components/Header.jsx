import { Avatar, IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import { logout, selectUser } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOutUser = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    })
  }
  
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

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        
        <div onClick={signOutUser} className="header__avatar">
          <img src={user?.photoURL} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
