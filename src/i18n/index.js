import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

import { en } from "./translations/en";

import { ru } from "./translations/ru";

const resources = {
  en,
  
  ru,
};

i18n.use(initReactI18next).init({
  resources,
  lng: Cookies.get("lng") || "ru",

  keySeparator: ".",

  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
