import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./sources/en";
import { ru } from "./sources/ru";

i18n.use(initReactI18next).init({
  resources: {
    en,
    ru,
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
