import Image from "next/image";
import type { FeatureT } from "../types";

const Feature = ({ content, id, img, title }: FeatureT) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center rounded-xl bg-white px-3 py-6 md:flex-row md:items-stretch md:justify-center"
    >
      <div className="m-2 h-auto">
        <Image src={img} alt="logo" height={100} width={100} />
      </div>
      <div className="flex flex-col text-center text-[#333] md:flex-1 md:text-left">
        <span className="mb-3 text-xl">{title}</span>
        <span className="font-normal text-xs">{content}</span>
      </div>
    </div>
  );
};

export default Feature;
