import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is a multi-language React app"
    }
  },
  sv: {
    translation: {
      welcome: "Välkommen",
      description: "Detta är en flerspråkig React-app"
    }
  }
};

i18n
  .use(LanguageDetector) // Detect language automatically
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en',   // default language
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;
