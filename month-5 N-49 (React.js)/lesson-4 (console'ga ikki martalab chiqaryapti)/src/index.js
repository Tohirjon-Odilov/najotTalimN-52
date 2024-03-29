import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import styles from "./components/apps/App.module.scss"
// import { Mytext, MyApp } from './components/Export'
import App from "./components/apps/App"
import Ref from "./components/useRef/Ref"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Mytext /> */}
    <App fontName={'monospace'} />
    <App fontName={"serif"} />
    <App fontName={'cursive'} />
    <App fontName={"sanSerif"} />
    <Ref />
  </React.StrictMode>
);
