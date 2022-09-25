import styles from "./NavBar.module.css";
import stylesButton from "../Button/Button.module.css";
import Button from "../Button/Button";

import { useState } from "react";
import { links } from "../../data";

function NavBar() {
  const [active, setActive] = useState(`${styles.navMenu}`);
  const [icon, setIcon] = useState(`${styles.navToggler}`);

  const navToggle = () => {
    if (active === `${styles.navMenu}`) {
      setActive(`${styles.navMenu} ${styles.navActive}`);
    } else setActive(`${styles.navMenu}`);

    // Icon Toggler
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
            <a href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
        <li>
          <a href="#">
            <Button classname={stylesButton.btnPrimary}>Contato</Button>
          </a>
        </li>
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
