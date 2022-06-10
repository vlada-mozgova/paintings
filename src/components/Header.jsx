import React from "react";
import { useSelector } from "react-redux";
import logo from "../images/thefamous.png";
import { MenuPoints } from "../shared_components/MenuPoints";
import { Search } from "../shared_components/Search";
import "../styles/Header.scss";

export const Header = () => {
  const menu = useSelector((state) => state.menu.menu);
  return (
    <div className="header">
      <div className="menu-box">
        <div className="menubar">
          <img src={logo} className="logo-img" alt="logo" />
          {menu.map((point) => (
            <MenuPoints key={point} text={point} />
          ))}
        </div>
        <div className="findbar">
          <Search />
        </div>
      </div>
    </div>
  );
};
