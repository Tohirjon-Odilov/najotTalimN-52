import React from "react";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.site__header}>
      <div className={style.header}>
        <ul>
          <li>
            <NavLink to={"/"}>Counter</NavLink>
          </li>
          <li>
            <NavLink to={"/useState"}>useState</NavLink>
          </li>
          <li>
            <NavLink to={"/lifeSycle"}>LifeSycle</NavLink>
          </li>
          <li>
            <NavLink to={"nimadir3"}>Counter</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
