import { FC } from "react";
import styles from "../styles/Home.module.css";
const Home: FC = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hola, soy <span>Maykel Arias Torres</span>
        </h1>

        <p className={styles.description}>Soy Desarrollador FrontEnd </p>
      </main>
    </>
  );
};

export default Home;
