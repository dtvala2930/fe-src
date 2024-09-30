export interface BannerLocationItemProps {
  locationImg: string;
  year: number;
  location: string;
}

export interface HotelRecommendContainerItemProps {
  locationId: number;
  location: string;
}

export interface HotelImgItemProps {
  hotelImgs: string[];
}

export interface HotelContainerItemProps {
  hotelName: string;
  hotelImgs: string[];
  nearestStation: string; /// TODO: (Hao): Chua lay duoc san ga gan nhat
  minutesWalkFromStation: number; /// TODO: (Hao): Chua tinh duoc thoi gian tu san ga gan nhat den hotel
  todayOpenHour: string;
  todayCloseHour: string;
  maxSuitcaseSize: number;
  maxBagSize: number;
  availabilityTimes?: boolean[]; //// TODO: (Hao): Chua lay duoc lich trong tuan cua hotel
}

export interface FAQItemProps {
  questionContent: string;
  guidelineTitle: string;
  guidelineContents: string[];
  accordionKey: number;
}

export interface CheckItemProps {
  accordionKey: number;
  title: string;
  checkItems: React.ReactNode;
  className?: string;
}

export interface HowToUseItemProps {
  howToUseImage: string;
  howToUseContent: string;
}

export interface FeatureItemProps {
  featImg: string;
  title: string;
  description: string;
}

export interface PricePlanItemProps {
  pricePlanImg: string;
  luggageType: string;
  pricePerDay: number; // TODO: (Hao): Chua tinh duoc price
  description: string;
}
