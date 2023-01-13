import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { defaultLang } from "../../lib/config";
import { GetLocaleStorage } from "../../lib/locale";

export const MenuDesktop: FC = () => {
  const [locale, setLocale] = useState(defaultLang);
  const router = useRouter();
  const [t, setT] = useState(GetLocaleStorage(locale).MenuDesktop);
  useEffect(() => {
    setLocale(localStorage.getItem("locale") ?? defaultLang);
  }, [router]);
  useEffect(() => {
    setT(GetLocaleStorage(locale).MenuDesktop);
  }, [locale]);
  return (
    <>
      <div className="menu">
        <div className="navigation flex">
          <div className="menuToggle"></div>
          <ul className="flex flex-row gap-2">
            <li className="active mouseaction flex flex-1">
              <Link href="#Home">
                <span className="text">{t.home}</span>
              </Link>
            </li>
            <li className="mouseaction flex flex-1">
              <Link href="#About">
                <span className="text">{t.about}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
