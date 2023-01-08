import {FC} from "react";

interface Props {
    className: string;
}

export const MenuDesktop: FC<Props> = ({className}) => {
    return (
        <>
            <div className={className}>
                <p className="text-lg">Home</p>
                <p className="text-base">Portafolio</p>
            </div>
        </>
    );
};
