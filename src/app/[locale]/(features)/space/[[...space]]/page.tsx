import { getTranslations } from "next-intl/server";
import LocationItem from "~/app/[locale]/(misc)/(dashboard)/components/Location";
import { LocationData } from "~/app/[locale]/(misc)/(dashboard)/data";
import { SectionLayout } from "~/shared/components";
import {
  BasicInformation,
  CreateOrder,
  CustomCarousel,
  LocationDetails,
  ServiceInformation,
  SocialLink,
  TransferInformation,
} from "./components";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "MakingOrder",
  });

  return {
    title: t("meta_title"),
  };
}

const ConfirmOrder = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[41px]">
      <section className="flex w-full max-w-[1024px] flex-col gap-[32px] md:flex-row md:px-12">
        <div className="left-column flex w-full max-w-[485px] flex-col gap-[9px]">
          <BasicInformation />
          <CustomCarousel className="h-[308px]" />
          <ServiceInformation />
          <TransferInformation />
          <LocationDetails />
          <SocialLink />
        </div>
        <CreateOrder />
      </section>
      <SectionLayout title="Locations">
        <ul className="mt-[32px] grid grid-cols-2 gap-5 md:grid-cols-3">
          {LocationData.map((item) => (
            <LocationItem key={item.id} {...item} />
          ))}
        </ul>
      </SectionLayout>
      <SectionLayout title="List of hotels in Osaka">
        <ul className="mt-[32px] grid grid-cols-2 gap-5 md:grid-cols-3">
          {LocationData.map((item) => (
            <LocationItem key={item.id} {...item} />
          ))}
        </ul>
      </SectionLayout>
    </div>
  );
};

export default ConfirmOrder;
