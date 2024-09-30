import Link from "next/link";
import type { LocationT } from "../types";

const LocationItem = ({ cityName, img }: LocationT) => {
  return (
    <>
      <li
        className={"list-none rounded-xl bg-center bg-cover bg-no-repeat p-[30%]"}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex h-full flex-1 items-center justify-center">
          <Link href="" className="text-center font-bold text-lg text-white leading-7">
            {cityName}
          </Link>
        </div>
      </li>
    </>
  );
};

export default LocationItem;
