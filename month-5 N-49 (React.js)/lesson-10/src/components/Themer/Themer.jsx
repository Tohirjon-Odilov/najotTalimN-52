import React, { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const ThemeContext = createContext();

function Themer({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

Themer.propTypes = {
  children: PropTypes.element,
};

export default Themer;
