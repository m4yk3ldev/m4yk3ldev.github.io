import selectImage from "../../assert/image/lang/select.svg";
import { FC } from "react";
import Image from "next/image";
import styles from "./LocaleSwitcher.module.css";
export const LocaleSwitcher: FC = () => {
  return (
    <>
      <div className={styles.selectLang}>
        <Image src={selectImage} alt="Select to image" />
      </div>
    </>
  );
};
