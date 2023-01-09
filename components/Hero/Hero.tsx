import {FC} from "react";
import {GetLocaleStorage} from "../../lib/locale";
import Link from "next/link";

interface Props {
    locale: string;
}

const Hero: FC<Props> = ({locale}) => {
    return (
        <div className="flex flex-col content-center items-center mx-auto min-h-screen h-screen">
            <div className="flex my-auto flex-col">
                <h1 className="m-0 text-6xl font-bold">{GetLocaleStorage(locale).title}</h1>
                <p className="text-center text-lg text-blanco-light">Soy Desarrollador FrontEnd </p>
                <p className="text-center text-lg text-blanco-light">
                    Contactarme :{" "}
                    <Link
                        type="email"
                        href="mailto:hanibal920915@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-lg text-center"
                    >
                        hanibal920915@gmail.com
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Hero