import { FC, useEffect } from "react";
import Link from "next/link";

export const MenuDesktop: FC = () => {
  return (
    <>
      <div className="menu">
        <div className="navigation flex">
          <div className="menuToggle"></div>
          <ul className="flex flex-row gap-2">
            <li className="active mouseaction flex flex-1">
              <Link href="#Home">
                <span className="text">Inicio</span>
              </Link>
            </li>
            <li className="mouseaction flex flex-1">
              <Link href="#About">
                <span className="text">Acerca</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
