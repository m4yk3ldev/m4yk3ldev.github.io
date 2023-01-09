import Link from "next/link";
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
            <MenuDesktop className="flex flex-col sticky inset-y-2/4" />
            <Hero locale={locale || "es"}/>
        </>
    );
};

export default Home;
