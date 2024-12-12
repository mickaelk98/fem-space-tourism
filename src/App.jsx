import styles from "./app.module.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main></main>
    </div>
  );
}

export default App;
