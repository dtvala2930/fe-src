import { getTranslations } from "next-intl/server";
import { SectionLayout } from "~/shared/components";
import LocationItem from "../../(misc)/(dashboard)/components/Location";
import { LocationData } from "../../(misc)/(dashboard)/data";
import { BannerLocation, ChecksContainer, FAQContainer, HotelRecommendContainer, SearchContainer } from "./components";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "SearchByArea",
  });

  return {
    title: t("meta_title"),
  };
}

const page = () => {
  return (
    <div className="bg-white text-black">
      <div className="z-3">
        <BannerLocation
          locationImg={
            "https://ecbo-cloak-production.s3.ap-northeast-1.amazonaws.com/area_images/pixta_67184049_M.webp"
          }
          year={2024}
          location={"Tokyo"}
        />
        <SearchContainer />
      </div>
      <div className="bg-[#f6f9f9] px-0 py-5 sm:px-10 lg:px-52 xl:px-80">
        <HotelRecommendContainer location="Tokyo" locationId={0} />
      </div>
      <div className="bg-white px-0 sm:px-10 lg:px-52 xl:px-80">
        <div className="mt-5 flex w-full flex-col items-center justify-center">
          <h1 className="mb-5 font-bold text-2xl">Content</h1>
          <div className="h-[300px] w-full rounded-xl bg-blue-100"> </div>
          <div className="w-full">
            <ChecksContainer />
            <FAQContainer />
          </div>
        </div>
        <SectionLayout className="mb-6 p-0" title="Popular area of Station" backgroundColor={"none"}>
          <ul className="mt-[32px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LocationData.map((item) => (
              <LocationItem key={item.id} {...item} />
            ))}
          </ul>
        </SectionLayout>
      </div>
    </div>
  );
};

export default page;
