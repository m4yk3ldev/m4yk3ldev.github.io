import {useRouter} from "next/router";
import {FC} from "react";
import {Navbar} from "../Navbar/Navbar";
import Hero from "../Hero/Hero"
import {MenuDesktop} from "../Menu/MenuDesktop";

const Home: FC = () => {
    const router = useRouter();
    const {locale} = router;
    return (
        <>
            <Navbar/>
            <MenuDesktop  />
            <Hero locale={locale || "es"}/>
        </>
    );
};

export default Home;
