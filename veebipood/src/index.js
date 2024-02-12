import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // minu .css fail võiks jääda allapoole, sest minu oma on muudetav
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (URL muutmine --> HTML muutmine sellega üheskoos)
// 1. Pean katkesama rakenduse töö ja kirjutama uue mooduli pealepanemiseks:
//      npm install react-router-dom
// 2. importima node_modules kaustast BrowserRouteri
// 3. Ümbritsema <App /> elemendi (tagi) BrowserRouteriga
// 4. App.js failis pean tekitama URLi ja HTMLi seoseid

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
