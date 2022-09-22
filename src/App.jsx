import NavBar from "./components/NavBar/NavBar";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourSection from "./components/FourSection/FourSection";
import FiveSection from "./components/FiveSection/FiveSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <FirstSection
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor."
        paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />
      <SecondSection
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor."
        paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />
      <ThirdSection
        text="Amet minim mollit non deserunt!"
        paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />
      <FourSection
        text="Amet minim mollit non deserunt!"
        paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />
      <FiveSection
        text="Amet minim mollit non deserunt!"
        paragraph="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
      />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
