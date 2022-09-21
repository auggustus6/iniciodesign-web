import NavBar from "./components/NavBar/NavBar";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";

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
    </>
  );
}

export default App;
