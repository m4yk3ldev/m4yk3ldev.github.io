import selectImage from "../../assert/image/lang/select.svg";
import { FC } from "react";
import Image from "next/image";
export const LocaleSwitcher: FC = () => {
  return (
    <>
      <div className="flex">
        <Image src={selectImage} alt="Select to image"  width={32} height={32} className="cursor-pointer"/>
      </div>
    </>
  );
};
