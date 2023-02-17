import styles from "./NavBar.module.css";
import { useState } from "react";
import { links } from "../../data";
import { I18N_STORAGE_KEY } from "../../App";
import logo from "../../assets/logo.png";
import { i18next } from "../../translate/i18n";

function NavBar() {
  const [language, setLanguage] = useState(
    localStorage.getItem(I18N_STORAGE_KEY)
  );

  const handleSelectChange = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location;
  };

  const scrollToOnClick = (event) => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const toItem = document.querySelector(id).offsetTop;

    window.scroll({
      top: toItem - 30,
    });
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.content}>
          <a href="#" className={styles.navBrand}>
            <img src={logo} alt="Imagem logo da página" />
          </a>
          {/* DESKTOP VERSION */}
          <ul className={styles.desktop}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url} onClick={scrollToOnClick}>
                  {link.text}
                </a>
              </li>
            ))}
            <a
              className={styles.contact}
              href="https://api.whatsapp.com/send?phone=5517992580206&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20voc%C3%AAs%20me%20ajudariam%20no%20desenvolvimento%20do%20meu%20projeto"
              target="_blank"
            >
              {i18next.t("links.contact")}
            </a>
            <select
              className={styles.languageDesk}
              onChange={handleSelectChange}
              value={language}
            >
              <option value="pt-BR">PT</option>
              <option value="en-US">EN</option>
            </select>
          </ul>
          {/* MOBILE VERSION */}
          <ul
            className={`${styles.mobile} ${isActive ? styles.menuMobile : ""}`}
          >
            {links.map((link) => (
              <li key={link.id} onClick={() => setIsActive(false)}>
                <a href={link.url} onClick={scrollToOnClick}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <select
            className={styles.languageMobile}
            onChange={handleSelectChange}
            value={language}
          >
            <option value="pt-BR">PT</option>
            <option value="en-US">EN</option>
          </select>
          <div
            onClick={() => setIsActive(!isActive)}
            className={`${styles.icon} ${isActive ? styles.actived : ""}`}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
