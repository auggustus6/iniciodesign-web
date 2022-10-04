import styles from "./NavBar.module.css";
import { useState } from "react";
import { links } from "../../data";
import { i18next } from "../../translate/i18n";

const I18N_STORAGE_KEY = "i18nextLng";

function NavBar() {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
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
        Logo
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
        <select onChange={handleSelectChange} value={language}>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
        </select>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
}

export default NavBar;
