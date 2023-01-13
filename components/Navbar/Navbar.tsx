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
      <nav className="sticky top-1 top-3.5 w-100 h-auto max-h-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row flex-nowrap content-center items-center justify-between">
            <FavIcon />
            <div className="flex flex-row gap-2">
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
                  className="cursor-pointer mr-1 mouseaction"
                />
              </Link>
            </div>
          </div>
          <LocaleSwitcher />
        </div>
      </nav>
    </>
  );
};
