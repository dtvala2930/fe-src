import Image from "next/image";
import type { BannerLocationItemProps } from "../types/index";

const BannerLocation = ({ locationImg, year, location }: BannerLocationItemProps) => {
  return (
    <div className="relative mb-[40px] h-[363px]">
      <Image
        width={2000}
        height={500}
        className="h-full w-full bg-no-repeat object-cover"
        src={locationImg}
        alt="location img"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-20"> </div>
      <h1 className="-translate-y-2/4 -translate-x-2/4 absolute top-2/4 left-2/4 w-full text-wrap text-center font-bold text-[1.25rem] text-white lg:text-[1.75rem] xl:text-[2.15rem]">
        [{year}] Summary of hotel availability in {location}
      </h1>
    </div>
  );
};

export default BannerLocation;
