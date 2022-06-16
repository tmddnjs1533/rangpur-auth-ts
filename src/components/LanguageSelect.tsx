import React from "react";

import { LANGUAGE_FOR_OS } from "lang/types";
import i18n from "i18next";

const LanguageSelect = () => {
  const buttons = [];
  Object.entries(LANGUAGE_FOR_OS).forEach(([key, value]) => {
    buttons.push({ key, value });
  });
  return (
    <div>
      {buttons &&
        buttons.map((btn) => (
          <button
            key={btn.key}
            type="button"
            onClick={() => i18n.changeLanguage(btn.value)}
          >
            {btn.key}
          </button>
        ))}
    </div>
  );
};

export default LanguageSelect;
