import { Accordion } from "~/shared/components/base/accordion";
import { CheckContainer, Feature, HowToUse, PricePlan } from ".";

const ChecksContainer = () => {
  return (
    <Accordion key="accordion1" type="multiple" className="mt-5 w-full text-center">
      <CheckContainer
        accordionKey={1}
        title="Check how to use"
        checkItems={
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
            <HowToUse howToUseContent="Content" howToUseImage="https://cloak.ecbo.io/how_to_use_01.webp" />
            <HowToUse howToUseContent="Content" howToUseImage="https://cloak.ecbo.io/how_to_use_01.webp" />
            <HowToUse howToUseContent="Content" howToUseImage="https://cloak.ecbo.io/how_to_use_01.webp" />
          </div>
        }
      />
      <CheckContainer
        className="bg-white p-0"
        accordionKey={2}
        title="Check 4 features"
        checkItems={
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <Feature featImg="https://cloak.ecbo.io/feature_01.webp" title="Content" description="Content" />
            <Feature featImg="https://cloak.ecbo.io/feature_01.webp" title="Content" description="Content" />
            <Feature featImg="https://cloak.ecbo.io/feature_01.webp" title="Content" description="Content" />
            <Feature featImg="https://cloak.ecbo.io/feature_01.webp" title="Content" description="Content" />
          </div>
        }
      />
      <CheckContainer
        className="bg-white p-0"
        accordionKey={3}
        title="Check price plan"
        checkItems={
          <>
            <PricePlan
              pricePlanImg="https://cloak.ecbo.io/plan_size_bag.webp"
              luggageType="Bag size"
              pricePerDay={500}
              description="Description"
            />
            <PricePlan
              pricePlanImg="https://cloak.ecbo.io/plan_size_suitcase.webp"
              luggageType="Suitcase size"
              pricePerDay={800}
              description="Description"
            />
          </>
        }
      />
    </Accordion>
  );
};

export default ChecksContainer;
