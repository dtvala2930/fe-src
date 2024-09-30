import Image from "next/image";
import type { HowToUseItemProps } from "../types";

const HowToUse = ({ howToUseImage, howToUseContent }: HowToUseItemProps) => {
  return (
    <div className="mb-2 flex min-h-[300px] w-full flex-col rounded-xl bg-gray-100 shadow-lg">
      <div className="w-full rounded-t-xl">
        <Image width={1920} height={1080} className="rounded-sm object-contain" src={howToUseImage} alt="guide" />
      </div>
      <div className="mt-5 flex-1 items-center text-center font-bold">{howToUseContent}</div>
    </div>
  );
};

export default HowToUse;
