import { FC } from "react";
import styles from "./MenuDesktop.module.css";

export const MenuDesktop: FC = () => {
  return (
    <>
      <div className="menuDesktop">
        <ul>
          <li>Home</li>
          <li>Proyectos</li>
        </ul>
      </div>
    </>
  );
};
