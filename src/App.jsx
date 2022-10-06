import NavBar from "./components/NavBar/NavBar";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourSection from "./components/FourSection/FourSection";
import FiveSection from "./components/FiveSection/FiveSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import wpp from "./assets/wpp.svg";
import "./App.css";
import { i18next } from "./translate/i18n";
import { useEffect } from "react";

export const I18N_STORAGE_KEY = "i18nextLng";

function App() {
  return (
    <>
      <main id="home">
        <NavBar />
        <section>
          <FirstSection
            text={i18next.t("titles.firstTitle")}
            paragraph={i18next.t("paragraphs.firtParagraph")}
          />
        </section>
        <section>
          <SecondSection
            text={i18next.t("titles.secondTitle")}
            paragraph={i18next.t("paragraphs.secondParagraph")}
          />
        </section>
        <section id="services">
          <ThirdSection
            text={i18next.t("titles.thirdTitle")}
            paragraph={i18next.t("paragraphs.thirdParagraph")}
          />
        </section>
        <section id="about">
          <FourSection
            text={i18next.t("titles.fourTitle")}
            paragraph={i18next.t("paragraphs.fourParagraph")}
          />
        </section>
        <section>
          <FiveSection
            text={i18next.t("titles.fiveTitle")}
            paragraph={i18next.t("paragraphs.fiveParagraph")}
          />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Footer />
        </section>
        <a
          href="http://web.whatsapp.com/send?phone=5517991821933"
          target="_blank"
          className="wrapper"
        >
          <div className="circle">
            <img
              src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png"
              alt="Icon"
            />
          </div>
          <div className="retangle">
            <div className="text">
              <p>Vamos tomar um café ?</p>
              <span>+55 (17) 991821933</span>
            </div>
          </div>
        </a>
      </main>
    </>
  );
}

export default App;
