"use client";

import { addDays, format, isBefore } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "~/shared/components/base/button";
import { Calendar } from "~/shared/components/base/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "~/shared/components/base/popover";
import { cn } from "~/shared/utils";

const DatePickerWithRange = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const today = new Date();

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 10),
  });

  const isDateDisabled = (date: Date) => {
    return isBefore(date, new Date());
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground", className)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "MM/dd")} <span className="ml-0 sm:ml-3"> </span> -{" "}
                  <span className="ml-0 sm:ml-3"> </span>
                  {format(date.to, "MM/dd")}
                </>
              ) : (
                format(date.from, "MM/dd")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            className="bg-white"
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={isDateDisabled}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerWithRange;
