import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { GetLocaleStorage } from "../../lib/locale";
import styles from "./Home.module.css";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { Navbar } from "../Navbar/Navbar";
const Home: FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="container">
      <Navbar />
      <main className="col-2">
        <MenuDesktop />
        <div className={styles.main}>
          <div className={styles.title}>
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
        </div>
      </main>
      <footer className={styles.footer}>Created by Maykel Arias Torres</footer>
    </div>
  );
};

export default Home;
