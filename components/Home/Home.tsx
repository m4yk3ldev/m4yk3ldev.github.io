import {useRouter} from "next/router";
import {FC} from "react";
import {Navbar} from "../Navbar/Navbar";
import Hero from "../Hero/Hero"

const Home: FC = () => {
    const router = useRouter();
    const {locale} = router;
    return (
        <div className="container mx-auto">
            <Navbar/>
            <Hero locale={locale || "es"}/>
        </div>
    );
};

export default Home;
