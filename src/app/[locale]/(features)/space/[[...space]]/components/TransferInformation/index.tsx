"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/shared/components/base/accordion";
import { ClockIcon, SuiteCaseIcon } from "~/shared/components/icons";

export default function TransferInformation() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Transfer Information</h2>
      <div className="flex items-start justify-between gap-14">
        <div className="flex items-center gap-[13px] py-[14px]">
          <ClockIcon />
          <p className="my-0 font-bold">Business Hours</p>
        </div>
        <Accordion type="single" collapsible className="grow">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base">Today: 12:00 - 22:00</AccordionTrigger>
            <AccordionContent className="text-base">Sunday: 12:00 - 22:00</AccordionContent>
            <AccordionContent className="text-base">Monday: 12:00 - 22:00</AccordionContent>
            <AccordionContent className="text-base">Tuesday: 12:00 - 22:00</AccordionContent>
            <AccordionContent className="text-base">Wednesday: 12:00 - 22:00</AccordionContent>
            <AccordionContent className="text-base">Thursday: 12:00 - 22:00</AccordionContent>
            <AccordionContent className="text-base">Friday: 12:00 - 22:00</AccordionContent>
            <AccordionContent className="text-base">Saturday: 12:00 - 22:00</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[13px]">
          <SuiteCaseIcon />
          <p className="font-bold">Max No. of Luggage</p>
        </div>
        <div className="flex flex-col">
          <p>Bag Size：10</p>
          <p>Suitcase Size：10</p>
        </div>
      </div>
    </div>
  );
}
