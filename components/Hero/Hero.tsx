import { FC, useEffect, useState } from "react";
import { GetLocaleStorage } from "../../lib/locale";
import Link from "next/link";
import Image from "next/image";

import gmail from "../../assert/image/redes/gmail.svg";
import github from "../../assert/image/redes/github.svg";
import twitter from "../../assert/image/redes/twitter.svg";
import linkedin from "../../assert/image/redes/linkedin.svg";
import { defaultLang } from "../../lib/config";
import { useRouter } from "next/router";

const Hero: FC = () => {
  const [locale, setLocale] = useState(defaultLang);
  const router = useRouter();
  const [t, setT] = useState(GetLocaleStorage(locale).Hero);
  useEffect(() => {
    setLocale(localStorage.getItem("locale") ?? defaultLang);
  }, [router]);
  useEffect(() => {
    setT(GetLocaleStorage(locale).Hero);
  }, [locale]);
  return (
    <div
      className="mx-auto flex h-screen min-h-screen flex-col content-center items-center"
      id="Home"
    >
      <div className="my-auto flex flex-col">
        <h1 className="m-0 text-2xl font-bold text-blanco-light md:text-4xl lg:text-6xl">
          {t.title}
        </h1>
        <p className="my-2.5 self-end text-center text-lg text-blanco-light">
          {t.description}
        </p>
        <p className="flex flex-row items-center justify-center gap-1 self-end text-center text-lg text-blanco-light">
          <Link
            href="https://github.com/m4yk3ldev"
            target="_blank"
            rel="noopener"
            className="mouseaction text-center text-lg font-bold"
          >
            <Image src={github} alt="Github" width={30} height={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/maykel-arias-torres-b827a6136/"
            target="_blank"
            rel="noopener"
            className="mouseaction text-center text-lg font-bold"
          >
            <Image src={linkedin} alt="Github" width={30} height={30} />
          </Link>
          <Link
            href="https://twitter.com/Maykel920915"
            target="_blank"
            rel="noopener"
            className="mouseaction text-center text-lg font-bold"
          >
            <Image src={twitter} alt="Twitter" width={30} height={30} />
          </Link>
          <Link
            type="email"
            href="mailto:hanibal920915@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="mouseaction text-center text-lg font-bold"
          >
            <Image src={gmail} alt="Gmail Email" width={30} height={30} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
