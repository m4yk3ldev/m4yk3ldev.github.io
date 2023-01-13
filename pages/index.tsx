import { NextPage } from "next";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import { useRouter } from "next/navigation";
import { defaultLang } from "../lib/config";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("locale", defaultLang);
  }, [router]);
  return (
    <>
      <MainLayout titleText="Bienvenido">
        <Home />
      </MainLayout>
    </>
  );
};
export default HomePage;
