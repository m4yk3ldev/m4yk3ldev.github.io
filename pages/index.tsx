import { NextPage } from "next";
import Home from "../components/Home";
import MainLayout from "../components/MainLayout";
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
