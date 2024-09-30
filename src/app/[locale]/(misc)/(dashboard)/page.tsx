import { getTranslations } from "next-intl/server";

import { SectionLayout } from "~/shared/components";
import { HowToUse } from "./components";
import Feature from "./components/Feature";
import LocationItem from "./components/Location";
import SearchForm from "./components/Search";
import { FeatureData, HowToUseData, LocationData } from "./data";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Dashboard",
  });

  return {
    title: t("meta_title"),
  };
}

const Dashboard = () => {
  return (
    <div className="[&_p]:my-6">
      <div className="flex flex-col items-center justify-center">
        <SectionLayout backgroundColor={"none"} className="px-0 text-black">
          <div
            className="m-0 mb-6 bg-no-repeat pt-8 md:bg-[position:right_0] md:pt-24"
            style={{ backgroundImage: "url(https://cloak.ecbo.io/top.webp)" }}
          >
            <div className="mx-auto mt-0 mb-[120px] pl-0 md:mb-[50px] md:pl-[25px]">
              <h1 className="font-bold text-[2rem] text-medium-blue md:text-[3rem]">Luggage transfer</h1>
              <div className="mt-[20px] font-bold text-[1rem] leading-7 md:text-[1.25rem]">
                Reserve with your smartphone
              </div>
            </div>
            <div className=" w-[100%] rounded-xl bg-alice-blue px-[24px] py-[26px]">
              <SearchForm />
            </div>
          </div>
        </SectionLayout>
        <SectionLayout title="How to use" className="mb-6 flex flex-col items-center justify-center">
          <div className="mt-[32px] flex flex-col gap-4 md:flex-row">
            {HowToUseData.map((item) => (
              <HowToUse key={item.number} {...item} />
            ))}
          </div>
        </SectionLayout>
        <SectionLayout title="Features" className="mb-6" backgroundColor={"peach"} titleColor={"neon"}>
          <div className="mt-[32px] grid grid-cols-1 gap-5 md:grid-cols-2">
            {FeatureData.map((item) => (
              <Feature key={item.id} {...item} />
            ))}
          </div>
        </SectionLayout>
        <SectionLayout title="Locations" className="mb-6">
          <ul className="mt-[32px] grid grid-cols-2 gap-5 md:grid-cols-3">
            {LocationData.map((item) => (
              <LocationItem key={item.id} {...item} />
            ))}
          </ul>
        </SectionLayout>
        <SectionLayout className="mb-6" backgroundColor={"peach"}>
          <div className="mt-[32px] flex flex-col font-bold text-dark-gray">
            <span className="mb-2.5 text-base">How luggage stored dates are counted:</span>
            <span className="text-xs">
              ・Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem obcaecati dolorum itaque maxime
              voluptatem cum quis sunt? Quidem, omnis consequuntur vel impedit facere nisi distinctio provident itaque
              expedita quo natus?.
            </span>
            <span className="text-xs">
              ・Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione corrupti in commodi. Eum
              voluptate ab ad, aspernatur sint inventore expedita exercitationem officia vitae, ullam porro consectetur
              eius quo fugiat?
            </span>
          </div>
        </SectionLayout>
        <SectionLayout className="mb-6 p-0" title="World Locations" backgroundColor={"none"}>
          <ul className="mt-[32px] grid grid-cols-2 gap-5">
            {LocationData.slice(0, 2).map((item) => (
              <LocationItem key={item.id} {...item} />
            ))}
          </ul>
        </SectionLayout>
      </div>
    </div>
  );
};

export default Dashboard;
