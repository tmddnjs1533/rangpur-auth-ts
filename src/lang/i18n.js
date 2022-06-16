import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { LANGUAGE_FOR_OS } from "./types";

import langEn from "lang/lang.en";
import langKo from "lang/lang.ko";

const resource = {
  [LANGUAGE_FOR_OS.EN]: { translation: langEn },
  [LANGUAGE_FOR_OS.KO]: { translation: langKo },
};

const init = (lang) => {
  i18n.use(initReactI18next).init({
    resources: resource,
    fallbackLng: "en-US",
    debug: true,
    interpolation: {
      escapeValue: true,
      prefix: "{",
      suffix: "}",
    },
    lng: lang,
  });
};

export default init;
