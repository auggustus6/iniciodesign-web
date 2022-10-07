import styles from "./Footer.module.css";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import { links } from "../../data";
import { i18next } from "../../translate/i18n";
import logo from "../../assets/logo.png";

const Footer = () => {
  function scrollToOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const toItem = document.querySelector(id).offsetTop;

    window.scroll({
      top: toItem - 30,
    });
  }
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.containerSocial}>
            <div className={styles.logo}>
              <img src={logo} alt="Logo da página" />
            </div>
            <div className={styles.social}>
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className={styles.containerMap}>
            <div className={styles.map}>
              <p>Site Map</p>
            </div>
            <div className={styles.mapText}>
              <ul>
                {links.map((link) => (
                  <li className={styles.navItem} key={link.id}>
                    <a href={link.url} onClick={scrollToOnClick}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.containerContact}>
            <div className={styles.contact}>
              <p>{i18next.t("footer.footerContact")}</p>
            </div>
            <div className={styles.contactText}>
              <ul>
                <li>
                  <a href="mailto:atendimento@iniciodesign.com.br">atendimento@iniciodesign.com.br</a>
                </li>
              </ul>
              <p>+55 17 99182.1933</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
