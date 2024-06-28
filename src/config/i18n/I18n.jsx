import React from "react";
import { useSelector } from "react-redux";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import * as data from "./data.json";

function I18n() {
  const language = useSelector((state) => state.language.currentLanguage);
  console.log(language);
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        tm: {
          translation: data,
        },
      },
      fallbackLng: language,
      interpolation: {
        escapeValue: false,
      },
    });
  return <></>;
}

export default I18n;
