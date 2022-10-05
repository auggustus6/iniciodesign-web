import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from "./languages";

i18next.use(LanguageDetector).init({
  debug: false,
  defaultNS: ["translations"],
  fallbackLng: "en-US",
  ns: ["translations"],
  resources: messages,
  detection: {
    order: ["path", "localStorage", "htmlTag", "cookie"],
    caches: ["localStorage", "cookie"], // cache user language on
  },
});

export { i18next };
