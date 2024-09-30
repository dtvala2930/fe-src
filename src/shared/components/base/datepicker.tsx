"use client";
import { Calendar as CalendarIcon } from "lucide-react";

import { format } from "date-fns";
import { type ReactNode, useState } from "react";
import { cn } from "~/src/utils/string";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

import type { DateRange } from "react-day-picker";

export function DatePicker({ footer, className = "" }: { footer?: ReactNode; className?: string }) {
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
