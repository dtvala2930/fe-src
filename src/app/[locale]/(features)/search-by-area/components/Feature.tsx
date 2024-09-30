import Image from "next/image";
import type { FeatureItemProps } from "../types";

const Feature = ({ featImg, title, description }: FeatureItemProps) => {
  return (
    <div className="flex min-h-[300px] w-full flex-col p-7 sm:p-3">
      <div className="w-full rounded-t-xl">
        <Image width={1920} height={1080} className="h-full w-full object-contain" src={featImg} alt="feat img" />
      </div>
      <div className="mt-3 text-center font-bold text-[12px]">{title}</div>
      <div className="items-center text-center text-[11px]">{description}</div>
    </div>
  );
};

export default Feature;
