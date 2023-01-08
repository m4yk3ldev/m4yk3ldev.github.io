import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { GetLocaleStorage } from "../../lib/locale";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { Navbar } from "../Navbar/Navbar";
const Home: FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="mx-2.5">
      <Navbar />
      <div className="main">
        <MenuDesktop className="flex flex-col sticky inset-y-2/4" />
        <div className="flex flex-col content-center items-center mx-auto min-h-screen">
          <div className="flex my-auto flex-col">
            <h1 className="m-0 text-6xl font-bold">{GetLocaleStorage(locale).title}</h1>
            <p className="text-center text-lg text-blanco-light">Soy Desarrollador FrontEnd </p>
            <p className="text-center text-lg text-blanco-light">
              Contactarme :{" "}
              <Link
                  type="email"
                  href="mailto:hanibal920914@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-lg text-center"
              >
                hanibal920914@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      <footer className="flex justify-center bottom-full">Created by Maykel Arias Torres</footer>
    </div>
  );
};

export default Home;
