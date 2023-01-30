/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { defaultLang } from "../../lib/config";
import { GetLocaleStorage, TypeLocale } from "../../lib/locale";
import useScrollPosition from "../../lib/hook/usescroll";

interface ILengthSection {
  top: number;
  bottom: number;
  status: string;
}

export const MenuDesktop: FC = () => {
  const [locale, setLocale] = useState<TypeLocale>(defaultLang);
  const [home, setHome] = useState<ILengthSection>({
    top: 0,
    bottom: 0,
    status: "",
  });
  const [about, setAbout] = useState<ILengthSection>({
    top: 0,
    bottom: 0,
    status: "",
  });
  const router = useRouter();
  const [t, setT] = useState(GetLocaleStorage(locale).MenuDesktop);
  useEffect(() => {
    setLocale((localStorage.getItem("locale") as TypeLocale) ?? defaultLang);
  }, [router]);
  useEffect(() => {
    setT(GetLocaleStorage(locale).MenuDesktop);
  }, [locale]);

  const handleClickHome = () => {
    setAbout({ ...about, status: "" });
    setHome({ ...home, status: "active" });
  };
  const handleClickAbout = () => {
    setAbout({ ...about, status: "active" });
    setHome({ ...home, status: "" });
  };

  const position = useScrollPosition();

  useEffect(() => {
    const { y } = position;
    if (y <= home.bottom && y >= home.top) {
      handleClickHome();
    } else if (y >= about.top && y <= about.bottom) {
      handleClickAbout();
    } else {
      handleClickHome();
    }
    console.log({ position });
  }, [position]);
  useEffect(() => {
    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    if (Home) {
      setHome({ ...home, top: Home.offsetTop, bottom: Home.offsetWidth });
      console.log({ Home });
    }
    if (About) {
      setAbout({ ...about, top: About.offsetTop, bottom: About.offsetWidth });
      console.log({ About });
    }
  }, []);
  return (
    <>
      <div className="menu">
        <div className="navigation flex">
          <div className="menuToggle"></div>
          <ul className="flex flex-row gap-2">
            <li className={`mouseaction flex flex-1  ${home.status} `}>
              <Link href="#Home" onClick={handleClickHome}>
                <span className="text">{t.home}</span>
              </Link>
            </li>
            <li className={`mouseaction flex flex-1 ${about.status}`}>
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
