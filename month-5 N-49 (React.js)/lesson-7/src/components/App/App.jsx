import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Content from "../Content/Content";
import Error from "../Error/Error";
import Header from "../Header/Header";
import SinglePage from "../SinglePage/SinglePage";
import st from "./App.module.scss"

export const DarkMode = createContext(null)


function App() {
  const toggle = () => {
    setTheme((ev) => ev === 'dark' ? 'light' : 'dark')
  }
  const [theme, setTheme] = useState("light")
  return (
    <DarkMode.Provider value={{ theme, toggle, setTheme }}>
      <div id={st[theme]} className={st.app}>
        <Header theme={theme} toggle={toggle} />
        {/* <button onChange={() => setTheme("light")}>btn</button> */}
        <main className={st.main}>
          <Routes>
            <Route path=":url" element={<Content />} >
              <Route path=":slug" element={<SinglePage />}></Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </DarkMode.Provider>
  );
}

export default App;
