import { FC } from "react";
import favicon from "../../assert/image/logo.svg";
import Image from "next/image";
const FavIcon: FC = () => {
  return (
    <>
      <div className="flex">
        <Image src={favicon} alt="Favicon"  width={50} height={50} />
      </div>
    </>
  );
};

export default FavIcon;
