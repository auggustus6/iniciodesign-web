import styles from "./Footer.module.css";
import facobook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.containerSocial}>
            <div className={styles.logo}>
              <h1>Logo</h1>
            </div>
            <div className={styles.social}>
              <img src={facobook} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className={styles.containerMap}>
            <div className={styles.map}>
              <p>Site Map</p>
            </div>
            <div className={styles.mapText}>
              <p>Home</p>
              <p>Serviços</p>
              <p>Sobre</p>
              <p>Portfólio</p>
              <p>Contato</p>
            </div>
          </div>
          <div className={styles.containerContact}>
            <div className={styles.contact}>
              <p>Contato</p>
            </div>
            <div className={styles.contactText}>
              <p>carlos@email.com</p>
              <p>+55 00 0000000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
