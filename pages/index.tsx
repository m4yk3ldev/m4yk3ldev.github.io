import { NextPage } from "next";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import { defaultLang } from "../lib/config";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  useEffect(() => {
    localStorage.setItem("locale", defaultLang);
  }, []);
  return (
    <>
      <MainLayout titleText="Bienvenido">
        <Home />
      </MainLayout>
    </>
  );
};
export default HomePage;
