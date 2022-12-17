import React from "react";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.site__header}>
      <div className={style.header}>
        <ul style={{ padding: 0, margin: 0 }}>
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
            <NavLink to={"/form"}>Form Validation</NavLink>
          </li>
          <li>
            <NavLink to={"/amaliyot"}>Kichik amaliyot</NavLink>
          </li>
          <li>
            <NavLink to={"/useEffect"}>UseEffect</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
