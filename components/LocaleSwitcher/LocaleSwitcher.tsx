import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

import select from "../../assert/image/lang/select.svg";

import en from "../../assert/image/lang/en.svg";
import es from "../../assert/image/lang/es.svg";
import pt from "../../assert/image/lang/pt.svg";

export const getImageFlag = (flag: string): StaticImageData => {
  switch (flag) {
    case "en":
      return en;
    case "es":
      return es;
    case "pt":
      return pt;
    default:
      return es;
  }
};

export const LocaleSwitcher: FC = () => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;
  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [classMenu, setClassMenu] = useState<string>("hidden");
  useEffect(() => {
    showMenu ? setClassMenu("") : setClassMenu("hidden");
  }, [showMenu]);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-row gap-1 flex-wrap items-start content-start">
      <div className="langMenu flex flex-col">
        <Image
          src={getImageFlag(activeLocale ?? "es")}
          alt="Select image"
          width={35}
          height={32}
          onClick={handleMenu}
          className="h-100 mouseaction"
        />
        <ul className={"selectLang " + classMenu}>
          {otherLocales.map((locale) => {
            return (
              <li key={locale} className="mt-1">
                <Link href={{ pathname, query }} as={asPath} locale={locale}>
                  <Image
                    src={getImageFlag(locale)}
                    alt={"Select image " + locale}
                    width={40}
                    height={40}
                    key={locale}
                    className="hover:scale-110 delay-150 duration-150 ease-in-out"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

