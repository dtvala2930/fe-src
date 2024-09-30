// "use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { type ReactNode, useState } from "react";
import type { DateRange } from "react-day-picker";
import { cn } from "~/src/utils/string";
import { Button } from "./button";
import { Calendar } from "./calendar";
import {} from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export function DatePicker({
  footer,
  className = "",
  time,
}: {
  footer?: ReactNode;
  className?: string;
  time?: {
    checkInTime: string;
    receivingTime: string;
  };
}) {
  const [selected, setSelected] = useState<DateRange | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "h-[50px] w-full justify-between px-[17px] py-3 text-left font-normal",
            className,
            !selected && "text-muted-foreground",
          )}
        >
          {selected?.from && selected?.to ? (
            <strong>
              {format(selected?.from, "yyyy/MM/dd")} - {format(selected.to, "yyyy/MM/dd")}
              {"    "}
              {time?.checkInTime} {"     "}
              {time?.receivingTime}
            </strong>
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="range"
          selected={selected}
          onSelect={(selected) => {
            setSelected(selected);
          }}
          footer={footer}
          className="rounded-[10px] bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}
