import styles from "./Container.module.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
}

export default App;
