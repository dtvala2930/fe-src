import { MapPin } from "lucide-react";
import { Button } from "~/shared/components/base/button";
import type { HotelRecommendContainerItemProps } from "../types/index";
import HotelContainer from "./HotelContainer";

const HotelContainerRecommendContainer = ({ location }: HotelRecommendContainerItemProps) => {
  const totalHotels = 130;
  const hotelImgs = [
    "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/Qb5ataUZ/79499b383d74f44d7db58bc6c24039249546f17e.webp",
    "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/_ClgkapV/206cebdba15501fc32e15da4aa06bef5b80e600e.webp",
    "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/Qb5ataUZ/79499b383d74f44d7db58bc6c24039249546f17e.webp",
    "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/_ClgkapV/206cebdba15501fc32e15da4aa06bef5b80e600e.webp",
    "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/Qb5ataUZ/79499b383d74f44d7db58bc6c24039249546f17e.webp",
  ];

  return (
    <div className="mt-7 w-full p-3">
      <div className="mb-5">
        <h1 className="mt-5 text-center font-bold text-3xl">Recommend hotel places around {location}</h1>
        <div className="mt-5 flex justify-center font-bold text-gray-500">
          <MapPin />
          <span>{totalHotels} hotels</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {Array.from({ length: 5 }).map(() => (
          <HotelContainer
            key={Math.random()}
            hotelImgs={hotelImgs}
            hotelName={"Hotel name"}
            nearestStation={"Content"}
            minutesWalkFromStation={0}
            todayOpenHour={"9:00"}
            todayCloseHour={"22:00"}
            maxSuitcaseSize={0}
            maxBagSize={0}
          />
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <span className="font-bold text-gray-500 text-xs">
          Displayed total
          <span className="ms-2 font-bold text-black text-xs">20/130</span>
        </span>
        <Button className="mt-5 h-[40px] w-[260px] rounded-full border-2 border-[#0b6ab3] bg-white font-bold text-[#0b6ab3] hover:bg-[#0b6ab3] hover:text-white">
          Load more hotels
        </Button>
      </div>
    </div>
  );
};

export default HotelContainerRecommendContainer;
