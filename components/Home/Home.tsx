import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { GetLocaleStorage } from "../../lib/locale";
import styles from "../../styles/Home.module.css";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { Navbar } from "../Navbar/Navbar";
const Home: FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <Navbar />
      <MenuDesktop />
      <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.status}>
            <span>En construcción</span>
          </div>
          <h1>{GetLocaleStorage(locale).title}</h1>
        </div>
        <p className={styles.description}>Soy Desarrollador FrontEnd </p>
        <p>
          Contactarme :{" "}
          <Link
            type="email"
            href="mailto:hanibal920915@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.contact}
          >
            hanibal920915@gmail.com
          </Link>
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
