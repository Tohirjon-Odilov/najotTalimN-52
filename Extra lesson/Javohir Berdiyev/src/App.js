import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Increase from "./components/increase/Increase";
import UseState from "./components/useState/UseState";
import LifeSycle from "./components/LifeSycle/LifeSycle";
import FormValidation from "./components/FormValidation/FormValidation";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container box">
        <Routes>
          <Route path="/" element={<Increase />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/lifeSycle" element={<LifeSycle />} />
          <Route path="/form" element={<FormValidation />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
