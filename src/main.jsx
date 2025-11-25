// main.js
import 'leaflet/dist/leaflet.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n";

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
