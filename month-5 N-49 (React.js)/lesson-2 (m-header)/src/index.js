import React from 'react';
import ReactDOM from 'react-dom/client';
import Vazifa from './components/Vazifa';
import Qushimcha from './components/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Vazifa />
    <Qushimcha />
  </React.StrictMode>
);