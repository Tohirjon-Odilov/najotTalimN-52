import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import StoreWrapper from "./components/StoreWrapper/StoreWrapper";
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <StoreWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreWrapper>
);

