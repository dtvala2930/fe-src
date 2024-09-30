import Image from "next/image";
import type { HowToUseT } from "../types";

const HowToUse = ({ number, img, content }: HowToUseT) => {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center rounded-xl bg-white px-[9px] py-[30px]">
      <span className="absolute top-[-15px] left-0">{number}</span>
      <Image className="mb-[10px]" src={img} alt="" width={100} height={100} />
      <span className="flex flex-1 text-center font-bold text-[#333] text-base leading-6">{content}</span>
    </div>
  );
};

export { HowToUse };
