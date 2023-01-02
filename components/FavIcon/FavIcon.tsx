import { FC } from "react";
import favicon from "../../assert/image/logo.svg";
import Image from "next/image";
import styles from "../../styles/FavIcon.module.css";
const FavIcon: FC = () => {
  return (
    <>
      <div className={styles.favicon}>
        <Image src={favicon} alt="Favicon" className={styles.img} />
      </div>
    </>
  );
};

export default FavIcon;
