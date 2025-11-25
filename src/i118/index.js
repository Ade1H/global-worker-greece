// index.js (top)
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css'; // marker cluster styles
import 'bootstrap/dist/css/bootstrap.min.css'; // if not already imported

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import en from "./en.json";
import sv from "./sv.json";

const resources = {
  en: { translation: en },
  sv: { translation: sv }
};

i18n
  .use(LanguageDetector) // detect browser language or localStorage
  .use(initReactI18next) // connect with React
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] }
  });

export default i18n;
