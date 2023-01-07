import { FC } from "react";
import FavIcon from "../FavIcon/FavIcon";
import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";
import styles from "./Navbar.module.css";

export const Navbar: FC = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <FavIcon />
        <LocaleSwitcher />
      </nav>
    </>
  );
};
