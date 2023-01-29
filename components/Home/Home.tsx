import { FC, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import useScrollPosition from "../../lib/hook/usescroll";

const Home: FC = () => {
  const position = useScrollPosition();

  useEffect(() => {
    console.log({ position });
  }, [position]);

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="scrolls">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Home;
