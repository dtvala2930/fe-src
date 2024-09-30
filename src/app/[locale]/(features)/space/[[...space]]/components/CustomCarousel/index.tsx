import Image from "next/image";
import { cn } from "~/shared/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/src/components/base/carousel";

export default function CustomCarousel({ className = "" }: { className?: string }) {
  return (
    <div className={cn("h-full", className)}>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-full overflow-hidden rounded-lg">
              <Image
                src={
                  "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/Qb5ataUZ/79499b383d74f44d7db58bc6c24039249546f17e.webp"
                }
                alt="Picture of flowers"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative h-full overflow-hidden rounded-lg">
              <Image
                src={
                  "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/Qb5ataUZ/79499b383d74f44d7db58bc6c24039249546f17e.webp"
                }
                alt="Picture of flowers"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative h-full overflow-hidden rounded-lg">
              <Image
                src={
                  "https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/Qb5ataUZ/79499b383d74f44d7db58bc6c24039249546f17e.webp"
                }
                alt="Picture of flowers"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
