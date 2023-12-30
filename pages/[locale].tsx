import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import { useMemo } from "react";
import { defaultLang } from "../lib/config";

interface Props {
  locale: string;
}
const HomePage: NextPage<Props> = ({ locale }) => {
  useMemo(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  return (
    <>
      <MainLayout titleText="Bienvenido">
        <Home />
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { locale: "es" } },
      { params: { locale: "en" } },
      { params: { locale: "pt" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.params?.locale ?? defaultLang;

  return {
    props: { locale },
  };
};
export default HomePage;
