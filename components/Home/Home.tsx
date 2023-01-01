import { useRouter } from "next/router";
import { FC } from "react";
import { GetLocaleStorage } from "../../lib/locale";
import styles from "../../styles/Home.module.css";
const Home: FC = () => {
  const router = useRouter();
  const { locale } = router
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.status}>
            <span>En construccion</span>
          </div>
          <h1>{GetLocaleStorage(locale).title}</h1>
        </div>
        <p className={styles.description}>Soy Desarrollador FrontEnd </p>
        <p>
          Contáctame :{" "}
          <a
            type="email"
            href="mailto:hanibal920915@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.contact}
          >
            hanibal920915@gmail.com
          </a>
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
