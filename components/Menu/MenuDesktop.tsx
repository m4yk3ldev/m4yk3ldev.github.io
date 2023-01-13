import { FC, useEffect } from "react";
import Link from "next/link";

export const MenuDesktop: FC = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="menu pr-3">
        <div className="navigation flex">
          <div className="menuToggle"></div>
          <ul className="flex flex-row gap-2">
            <li className="flex flex-1 active mouseaction">
              <Link href="#Home">
                <span className="text">Inicio</span>
              </Link>
            </li>
            <li className="flex flex-1 mouseaction">
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
