import Button from "../Button/Button";
import styles from "./NavBar.module.css";
import stylesButton from "../Button/Button.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h1>Logo</h1>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Serviços</li>
        <li className={styles.item}>Sobre</li>
        <li className={styles.item}>Portfólio</li>
        <Button
          type="button"
          classname={stylesButton["btn-primary"]}
          text="Contato"
        >
         Contato
        </Button>
      </ul>
    </nav>
  );
};

export default NavBar;
