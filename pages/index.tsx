import { NextPage } from "next";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
const HomePage: NextPage = () => {
  return (
    <>
      <MainLayout titleText="Bienvenido">
        <Home />
      </MainLayout>
    </>
  );
};
export default HomePage;
