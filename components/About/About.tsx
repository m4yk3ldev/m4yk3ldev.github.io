import { FC, useEffect, useState } from "react";
import { GetLocaleStorage, TypeLocale } from "../../lib/locale";
import { defaultLang } from "../../lib/config";
import { useRouter } from "next/router";

const About: FC = () => {
  const [locale, setLocale] = useState<TypeLocale>(defaultLang);
  const router = useRouter();
  const [t, setT] = useState(GetLocaleStorage(locale).About);
  useEffect(() => {
    setLocale((localStorage.getItem("locale") as TypeLocale) ?? defaultLang);
  }, [router]);
  useEffect(() => {
    setT(GetLocaleStorage(locale).About);
  }, [locale]);
  return (
    <section
      id="About"
      className="about"
      onFocus={() => {
        console.log("Viendo About");
      }}
      onScroll={() => {
        console.log("On Scroll");
      }}
    >
      <div>
        <h2>{t.title}</h2>
        <div>
          {t.description.map((d) => {
            return <p key={d}>{d}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
