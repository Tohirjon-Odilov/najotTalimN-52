import React, { useContext } from "react";
import { ThemeContext } from "./../Themer/Themer";

function Box() {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <div>
      Header |{" "}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change
      </button>
    </div>
  );
}

export default Box;
