import { FC } from "react";
import styles from "../styles/Home.module.css";
const Home: FC = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.status}>
            <span>En construccion</span>
          </div>
          <h1>Hola, soy Maykel Arias Torres</h1>
        </div>
        <p className={styles.description}>Soy Desarrollador FrontEnd </p>
      </main>
    </>
  );
};

export default Home;
