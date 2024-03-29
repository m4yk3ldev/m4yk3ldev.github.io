import { FC, useEffect, useState } from "react";
import FavIcon from "../FavIcon/FavIcon";
import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";
import Image from "next/image";
import cvvImage from "../../assert/image/cvv.svg";
import Link from "next/link";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { defaultLang, getCanonicalUrl } from "../../lib/config";
import { useRouter } from "next/router";
import { TypeLocale } from "../../lib/locale";

export const Navbar: FC = () => {
  const [locale, setLocale] = useState<TypeLocale>(defaultLang);
  const router = useRouter();
  useEffect(() => {
    setLocale((localStorage.getItem("locale") as TypeLocale) ?? defaultLang);
  }, [router]);
  return (
    <>
      <nav>
        <FavIcon />
        <div className="sectionMenu">
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
