import { FC } from "react";
import FavIcon from "../FavIcon/FavIcon";
import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";

export const Navbar: FC = () => {
  return (
    <>
      <nav className="flex flex-row flex-nowrap sticky top-1 content-center items-start justify-between top-3.5 w-100">
        <FavIcon />
        <LocaleSwitcher />
      </nav>
    </>
  );
};
