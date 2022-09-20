import NavBar from "./components/NavBar/NavBar";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";

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
    </>
  );
}

export default App;
