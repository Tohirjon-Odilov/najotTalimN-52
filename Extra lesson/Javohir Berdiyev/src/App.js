import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Increase from "./components/increase/Increase";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/counter" element={<Increase />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
