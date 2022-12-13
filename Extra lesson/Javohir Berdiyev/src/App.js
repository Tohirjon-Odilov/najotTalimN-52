import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Increase from "./components/increase/Increase";
import UseState from "./components/useState/UseState";
import LifeSycle from "./components/LifeSycle/LifeSycle";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Increase />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/lifeSycle" element={<LifeSycle />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
