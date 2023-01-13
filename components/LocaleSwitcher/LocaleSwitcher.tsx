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
    <div className="dropdown relative mt-2 inline-block content-center items-center self-center rounded">
      <button
        className="inline-flex items-center rounded bg-azul-light"
        onClick={handleMenu}
      >
        <Image
          src={getImageFlag(activeLocale ?? "es")}
          alt="Select image"
          width={40}
          height={40}
          onClick={handleMenu}
          className="mouseaction rounded"
        />
      </button>
      <ul
        className={`dropdown-menu absolute ${classMenu}  rounded-t rounded-b`}
      >
        {otherLocales.map((locale) => {
          return (
            <li key={locale} onClick={() => setClassMenu("hidden")}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                className="whitespace-no-wrap block hover:scale-110"
              >
                <Image
                  src={getImageFlag(locale)}
                  alt={"Select image " + locale}
                  width={40}
                  height={40}
                  key={locale}
                  className="mt-1 rounded"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
