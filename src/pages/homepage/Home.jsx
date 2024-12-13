import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textBlock}>
        <h1>
          So, you want to travel to <br />
        </h1>
        <span>Space</span>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.cta}>
        <button>Explore</button>
      </div>
    </main>
  );
}

export default Home;
