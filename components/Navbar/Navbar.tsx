import {FC} from "react";
import FavIcon from "../FavIcon/FavIcon";
import {LocaleSwitcher} from "../LocaleSwitcher/LocaleSwitcher";
import Image from "next/image";
import cvvImage from "../../assert/image/cvv.svg"
import Link from "next/link";
import {MenuDesktop} from "../Menu/MenuDesktop";
export const Navbar: FC = () => {
    return (
        <>
            <nav
                className="flex flex-row flex-nowrap sticky top-1 content-center items-center justify-between top-3.5 w-100">
                <FavIcon/>
                <div className="flex flex-row gap-2">
                    <MenuDesktop />
                    <Link href="/cv/CVV.pdf" target="_blank">
                        <Image src={cvvImage} width={32} height={32} alt="Download CVV"
                               className="cursor-pointer mr-1 mouseaction"/>
                    </Link>
                    <LocaleSwitcher/>
                </div>
            </nav>
        </>
    );
};
