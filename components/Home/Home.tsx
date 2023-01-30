import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
const Home: FC = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="scrolls">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
