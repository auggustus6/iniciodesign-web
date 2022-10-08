import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import { links } from "../../data";
import { I18N_STORAGE_KEY } from "../../App";
import logo from "../../assets/logo.png";

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

  const [active, setActive] = useState(`${styles.navMenu}`);
  const [icon, setIcon] = useState(`${styles.navToggler}`);

  const navToggle = () => {
    if (active === `${styles.navMenu}`) {
      setActive(`${styles.navMenu} ${styles.navActive}`);
    } else setActive(`${styles.navMenu}`);

    if (icon === `${styles.navMenu}`) {
      setIcon(`${styles.navToggler} ${styles.toggle}`);
    } else setIcon(`${styles.navToggler}`);
  };

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.navBrand}>
        <img src={logo} alt="Imagem logo da página" />
      </a>

      <ul className={active}>
        {links.map((link) => (
          <li
            className={styles.navItem}
            key={link.id}
            onClick={() => setActive(`${styles.navMenu}`)}
          >
            <a href={link.url} onClick={scrollToOnClick}>
              {link.text}
            </a>
          </li>
        ))}
        <select className={styles.languageDesk} onChange={handleSelectChange} value={language}>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
        </select>
      </ul>

      <select
        className={styles.languages}
        onChange={handleSelectChange}
        value={language}
      >
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
      </select>

      <div onClick={navToggle} className={icon}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
}

export default NavBar;
