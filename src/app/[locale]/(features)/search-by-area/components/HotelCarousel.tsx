import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/shared/components/base/carousel";

import type { HotelImgItemProps } from "../types/index";

const HotelCarousel = ({ hotelImgs }: HotelImgItemProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {hotelImgs.map((hotelImg) => (
          <CarouselItem key={Math.random()}>
            <div className="p-1">
              <Image
                src={hotelImg}
                alt="hotel img"
                width={1920}
                height={1080}
                className="h-[232px] w-full rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12 ms-20 bg-white" />
      <CarouselNext className="-right-12 me-20 bg-white" />
    </Carousel>
  );
};

export default HotelCarousel;
