import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Increase from "./components/increase/Increase";
import UseState from "./components/useState/UseState";
import LifeSycle from "./components/LifeSycle/LifeSycle";
import FormValidation from "./components/FormValidation/FormValidation";
import Main from "./components/KichikAmaliyot/Main";
import UseEffect from "./components/UseEffect/UseEffect";
import UseReduser from "./components/UseReduser";

export const test = createContext();

export const App = () => {
  return (
    <test.Provider value="salom">
      <BrowserRouter>
        <Header />
        <div className="container box">
          <Routes>
            <Route path="/" element={<Increase />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/lifeSycle" element={<LifeSycle />} />
            <Route path="/form" element={<FormValidation />} />
            <Route path="/amaliyot" element={<Main />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useReduser" element={<UseReduser />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </test.Provider>
  );
};
