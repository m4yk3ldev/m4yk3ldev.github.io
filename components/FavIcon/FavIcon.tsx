import { FC } from "react";
import favicon from "../../assert/image/logo.svg";
import Image from "next/image";
import Link from "next/link";

const FavIcon: FC = () => {
  return (
    <>
      <div className="favicon">
        <Link href="/">
          <Image
            src={favicon}
            alt="Favicon"
            width={50}
            height={50}
            className="mouseaction"
          />
        </Link>
      </div>
    </>
  );
};

export default FavIcon;
