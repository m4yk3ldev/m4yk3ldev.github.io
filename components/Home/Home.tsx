import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";

const Home: FC = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
