import Image from "next/image";
import type { PricePlanItemProps } from "../types";

const PricePlan = ({ pricePlanImg, luggageType, pricePerDay, description }: PricePlanItemProps) => {
  return (
    <div className="ms-4 flex w-full items-center rounded-xl bg-[#0066b5] p-2">
      <div className="h-full w-1/3 rounded-t-xl ps-3">
        <Image
          width={1920}
          height={1080}
          className="h-full w-3/4 rounded-sm object-contain"
          src={pricePlanImg}
          alt="Bag size"
        />
      </div>
      <div className="flex flex-1 flex-col items-start p-3 text-white">
        <div className="font-bold">{luggageType}</div>
        <div className="font-bold">
          <span className="text-3xl">¥ {pricePerDay}</span>
          <span className="text-lg">/Day</span>
        </div>
        <div className="w-full text-start text-[10px]">{description}</div>
      </div>
    </div>
  );
};

export default PricePlan;
