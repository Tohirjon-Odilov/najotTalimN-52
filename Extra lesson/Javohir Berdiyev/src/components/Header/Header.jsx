import React from "react";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.site__header}>
      <div className={style.header}>
        <ul>
          <li>
            <NavLink to={"counter"}>Counter</NavLink>
          </li>
          <li>
            <NavLink>Counter</NavLink>
          </li>
          <li>
            <NavLink>Counter</NavLink>
          </li>
          <li>
            <NavLink>Counter</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
