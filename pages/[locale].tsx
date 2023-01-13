import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import { useRouter } from "next/navigation";
import { locales, defaultLang } from "../lib/config";
import { useEffect } from "react";

interface Props {
  locale: string;
}
const HomePage: NextPage<Props> = ({ locale }) => {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale, router]);
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
  const locale = context.params?.locale ?? "es";

  return {
    props: { locale },
  };
};
export default HomePage;
