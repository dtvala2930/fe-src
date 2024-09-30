import type { FeatureT, HowToUseT, LocationT } from "../types";

export const HowToUseData: HowToUseT[] = [
  { number: "1", img: "https://cloak.ecbo.io/how_to_1.webp", content: "Chose date and time" },
  {
    number: "2",
    img: "https://cloak.ecbo.io/how_to_2.webp",
    content: "Staff will take a photo of your luggage and Check in complete",
  },
  { number: "3", img: "https://cloak.ecbo.io/how_to_3.webp", content: "Enjoy your day luggage-free!" },
];

export const FeatureData: FeatureT[] = [
  {
    id: "1",
    title: "dummy data dummy data",
    img: "https://cloak.ecbo.io/feature_map.webp",
    content: "dummy data dummy data",
  },
  {
    id: "2",
    title: "dummy data dummy data",
    img: "https://cloak.ecbo.io/feature_map_pin.webp",
    content: "dummy data dummy data",
  },
  {
    id: "3",
    title: "dummy data dummy data",
    img: "https://cloak.ecbo.io/feature_musical_instrument.webp",
    content: "dummy data dummy data",
  },
  {
    id: "4",
    title: "dummy data dummy data",
    img: "https://cloak.ecbo.io/feature_payment.webp",
    content: "dummy data dummy data",
  },
];

export const LocationData: LocationT[] = [
  { id: "1", img: "https://cloak.ecbo.io/tokyo.webp", cityName: "Tokyo" },
  { id: "2", img: "https://cloak.ecbo.io/osaka.webp", cityName: "Osaka" },
  { id: "3", img: "https://cloak.ecbo.io/kyoto.webp", cityName: "Kyoto" },
  { id: "4", img: "https://cloak.ecbo.io/fukuoka.webp", cityName: "Fukuoka" },
  { id: "5", img: "https://cloak.ecbo.io/nagoya.webp", cityName: "Nagoya" },
  { id: "6", img: "https://cloak.ecbo.io/sapporo.webp", cityName: "Sapporo" },
];
