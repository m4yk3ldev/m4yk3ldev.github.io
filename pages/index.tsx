import { NextPage } from "next";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
const HomePage: NextPage = () => {
  return (
    <>
      <MainLayout title="Bienvenido">
        <Home />
      </MainLayout>
    </>
  );
};
export default HomePage;
