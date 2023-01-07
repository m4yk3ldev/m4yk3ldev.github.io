import { FC } from "react";
import FavIcon from "../FavIcon/FavIcon";
import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";

export const Navbar: FC = () => {
  return (
    <>
      <nav className="mx-2 flex flex-row flex-nowrap sticky top-1 content-center items-start justify-between top-3.5">
        <FavIcon />
        <LocaleSwitcher />
      </nav>
    </>
  );
};
