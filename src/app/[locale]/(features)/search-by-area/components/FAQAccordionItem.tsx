import { AccordionContent, AccordionItem, AccordionTrigger } from "~/shared/components/base/accordion";
import type { FAQItemProps } from "../types";

const FAQAccordionItem = ({ questionContent, guidelineTitle, guidelineContents, accordionKey }: FAQItemProps) => {
  return (
    <AccordionItem value={`item-${accordionKey}`} className="w-full">
      <AccordionTrigger className="ml-2 font-bold text-lg hover:no-underline">{questionContent}</AccordionTrigger>
      <AccordionContent>
        <div className="ml-2 text-start">
          <div className="font-bold">{guidelineTitle}</div>
          {guidelineContents.map((content) => (
            <div key={Math.random()} className="mb-5">
              {content}
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQAccordionItem;
