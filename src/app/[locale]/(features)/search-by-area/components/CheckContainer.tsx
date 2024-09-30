import { AccordionContent, AccordionItem, AccordionTrigger } from "~/shared/components/base/accordion";
import { cn } from "~/shared/utils";
import type { CheckItemProps } from "../types";

const CheckContainer = ({ title, checkItems, accordionKey, className }: CheckItemProps) => {
  return (
    <AccordionItem value={`item-${accordionKey}`}>
      <AccordionTrigger className="ml-2 font-bold text-lg uppercase hover:no-underline">{title}</AccordionTrigger>
      <AccordionContent>
        <div className={cn("flex w-full items-stretch justify-around rounded-sm bg-gray-100 p-5", className)}>
          {checkItems}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CheckContainer;
