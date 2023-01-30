import { FC, useEffect, useState } from "react";
import { GetLocaleStorage, TypeLocale } from "../../lib/locale";
import Link from "next/link";
import Image from "next/image";

import gmail from "../../assert/image/redes/gmail.svg";
import github from "../../assert/image/redes/github.svg";
import twitter from "../../assert/image/redes/twitter.svg";
import linkedin from "../../assert/image/redes/linkedin.svg";
import { defaultLang } from "../../lib/config";
import { useRouter } from "next/router";
import Tooltip from "../ToolTip/ToolTip";

const Hero: FC = () => {
  const [locale, setLocale] = useState<TypeLocale>(defaultLang);
  const router = useRouter();
  const [t, setT] = useState(GetLocaleStorage(locale).Hero);
  useEffect(() => {
    setLocale((localStorage.getItem("locale") as TypeLocale) ?? defaultLang);
  }, [router]);
  useEffect(() => {
    setT(GetLocaleStorage(locale).Hero);
  }, [locale]);
  return (
    <section id="Home" className="home">
      <div>
        <h1>{t.title}</h1>
        <p className="description">{t.description}</p>
        <p className="social">
          <Tooltip text="GitHub">
            <Link
              href="https://github.com/m4yk3ldev"
              target="_blank"
              rel="noopener"
            >
              <Image src={github} alt="Github" width={30} height={30} />
            </Link>
          </Tooltip>

          <Tooltip text="Linkedin">
            <Link
              href="https://www.linkedin.com/in/maykel-arias-torres-b827a6136/"
              target="_blank"
              rel="noopener"
            >
              <Image src={linkedin} alt="linkedin" width={30} height={30} />
            </Link>
          </Tooltip>
          <Tooltip text="Twitter">
            <Link
              href="https://twitter.com/Maykel920915"
              target="_blank"
              rel="noopener"
            >
              <Image src={twitter} alt="Twitter" width={30} height={30} />
            </Link>
          </Tooltip>
          <Tooltip text="Contact">
            <Link
              type="email"
              href="mailto:hanibal920915@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={gmail} alt="Gmail Email" width={30} height={30} />
            </Link>
          </Tooltip>
        </p>
      </div>
    </section>
  );
};

export default Hero;
