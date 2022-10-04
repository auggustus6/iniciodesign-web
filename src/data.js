import { i18next } from "./translate/i18n";

export const links = [
  {
    id: 1,
    text: `${i18next.t("links.home")}`,
    url: "#home",
  },
  {
    id: 2,
    text: `${i18next.t("links.services")}`,
    url: "#services",
  },
  {
    id: 3,
    text: `${i18next.t("links.about")}`,
    url: "#about",
  },
  {
    id: 4,
    text: `${i18next.t("links.port")}`,
    url: "#portfolio",
  },
  {
    id: 5,
    text: `${i18next.t("links.contact")}`,
    url: "#contact",
  },
];
