import React, { useContext } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import ReactSwitch from "react-switch";
import { darkMode } from "../../App";

const Header = () => {
  const { theme, changeTheme } = useContext(darkMode);
  console.log(theme, changeTheme);
  return (
    <header className={"site__header"}>
      <div className={"header"}>
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
          <li>
            <NavLink to={"/useReduser"}>UseReduser</NavLink>
          </li>
          <li>
            <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
