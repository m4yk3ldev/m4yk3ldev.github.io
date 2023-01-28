import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

import select from "../../assert/image/lang/select.svg";

import en from "../../assert/image/lang/en.svg";
import es from "../../assert/image/lang/es.svg";
import pt from "../../assert/image/lang/pt.svg";
import { defaultLang, locales } from "../../lib/config";
import { TypeLocale } from "../../lib/locale";

export const getImageFlag = (flag: TypeLocale): StaticImageData => {
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
  const { pathname, query, asPath } = router;
  const [activeLocale, setActiveLocale] = useState<TypeLocale>(defaultLang);
  const otherLocales = locales.filter((locale) => locale !== activeLocale);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [classMenu, setClassMenu] = useState<string>("hidden");
  useEffect(() => {
    showMenu ? setClassMenu("") : setClassMenu("hidden");
  }, [showMenu]);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    setActiveLocale(
      (localStorage.getItem("locale") as TypeLocale) ?? defaultLang
    );
  }, []);
  console.log({ router });

  return (
    <div className="dropdown">
      <button onClick={handleMenu}>
        <Image
          src={getImageFlag(activeLocale ?? "es")}
          alt="Select image"
          width={40}
          height={40}
          onClick={handleMenu}
        />
      </button>
      <ul className={`dropdown-menu  ${classMenu}`}>
        {otherLocales.map((l) => {
          return (
            <li key={l} onClick={() => setClassMenu("hidden")}>
              <Link
                href={`${l}`}
                onClick={() => {
                  localStorage.setItem("locale", l);
                  setActiveLocale(l);
                }}
              >
                <Image
                  src={getImageFlag(l)}
                  alt={"Select image " + l}
                  width={40}
                  height={40}
                  key={l}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
