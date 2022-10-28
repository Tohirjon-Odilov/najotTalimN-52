import React from 'react';
import ReactDOM from 'react-dom/client.js';
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);