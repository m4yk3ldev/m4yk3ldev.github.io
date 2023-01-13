import { FC } from "react";
import FavIcon from "../FavIcon/FavIcon";
import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";
import Image from "next/image";
import cvvImage from "../../assert/image/cvv.svg";
import Link from "next/link";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { useRouter } from "next/router";
import { getCanonicalUrl } from "../../lib/config";

export const Navbar: FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <nav className="main sticky top-3.5 flex max-h-full flex-row flex-nowrap content-center items-center justify-between">
        <FavIcon />
        <div className="flex flex-row content-center items-center justify-center gap-2">
          <MenuDesktop />
          <Link
            href={`${getCanonicalUrl}/cv/${locale}.pdf`}
            target="_blank"
            replace
          >
            <Image
              src={cvvImage}
              width={32}
              height={32}
              alt="Download CVV"
              className="mouseaction mr-1 cursor-pointer"
            />
          </Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </>
  );
};
