import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { defaultLang } from "../../lib/config";
import { GetLocaleStorage, TypeLocale } from "../../lib/locale";
import useScrollPosition from "../../lib/hook/usescroll";

export const MenuDesktop: FC = () => {
  const [locale, setLocale] = useState<TypeLocale>(defaultLang);
  const [statusHome, setStatusHome] = useState<string>("");
  const [statusAbout, setStatusAbout] = useState<string>("");
  const router = useRouter();
  const [t, setT] = useState(GetLocaleStorage(locale).MenuDesktop);
  useEffect(() => {
    setLocale((localStorage.getItem("locale") as TypeLocale) ?? defaultLang);
  }, [router]);
  useEffect(() => {
    setT(GetLocaleStorage(locale).MenuDesktop);
  }, [locale]);

  const handleClickHome = () => {
    setStatusAbout("");
    setStatusHome("active");
  };
  const handleClickAbout = () => {
    setStatusAbout("active");
    setStatusHome("");
  };

  const position = useScrollPosition();

  useEffect(() => {
    if (position.y <= 100) {
      handleClickHome();
    } else if (position.y > 100) {
      handleClickAbout();
    } else {
      handleClickHome();
    }
  }, [position]);
  return (
    <>
      <div className="menu">
        <div className="navigation flex">
          <div className="menuToggle"></div>
          <ul className="flex flex-row gap-2">
            <li className={`mouseaction flex flex-1  ${statusHome} `}>
              <Link href="#Home" onClick={handleClickHome}>
                <span className="text">{t.home}</span>
              </Link>
            </li>
            <li className={`mouseaction flex flex-1 ${statusAbout}`}>
              <Link href="#About" onClick={handleClickAbout}>
                <span className="text">{t.about}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
