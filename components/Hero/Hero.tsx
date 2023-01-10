import {FC} from "react";
import {GetLocaleStorage} from "../../lib/locale";
import Link from "next/link";
import Image from "next/image";

import gmail from "../../assert/image/redes/gmail.svg"
import github from "../../assert/image/redes/github.svg"
import twitter from "../../assert/image/redes/twitter.svg"
import linkedin from "../../assert/image/redes/linkedin.svg"

interface Props {
    locale: string;
}

const Hero: FC<Props> = ({locale}) => {
    return (
        <div className="flex flex-col content-center items-center mx-auto min-h-screen h-screen" id="Home">
            <div className="flex my-auto flex-col">
                <h1 className="m-0 md:text-4xl lg:text-6xl font-bold text-blanco-light text-2xl">{GetLocaleStorage(locale).title}</h1>
                <p className="text-center text-lg text-blanco-light self-end my-2.5">Soy Desarrollador FrontEnd </p>
                <p className="text-center text-lg text-blanco-light self-end flex flex-row items-center justify-center gap-1">
                    <Link href="https://github.com/m4yk3ldev" target="_blank" rel="noopener"
                          className="font-bold text-lg text-center">
                        <Image src={github} alt="Github" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/maykel-arias-torres-b827a6136/" target="_blank"
                          rel="noopener" className="font-bold text-lg text-center">
                        <Image src={linkedin} alt="Github" width={30} height={30}/>
                    </Link>
                    <Link href="https://twitter.com/Maykel920915" target="_blank" rel="noopener"
                          className="font-bold text-lg text-center">
                        <Image src={twitter} alt="Twitter" width={30} height={30}/>
                    </Link>
                    <Link
                        type="email"
                        href="mailto:hanibal920915@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-lg text-center"
                    >
                        <Image src={gmail} alt="Gmail Email" width={30} height={30}/>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Hero