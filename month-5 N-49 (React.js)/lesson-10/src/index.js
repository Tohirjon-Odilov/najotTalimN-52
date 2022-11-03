import React from "react";
import { createRoot } from "react-dom/client";
import Themer from "./components/Themer/Themer";
import App from "./components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Themer>
    <App />
  </Themer>
);
