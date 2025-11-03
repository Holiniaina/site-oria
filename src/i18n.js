import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json'; // English
import translationFR from './locales/fr/translation.json'; // French 

const resources = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  };
  i18n.use(initReactI18next).init({
    resources,
    lng: 'fr', // Set the default language
    keySeparator: ".", // Allow for nested translations without using dots
    interpolation: {
      escapeValue: false,
    },
  });
  export default i18n;