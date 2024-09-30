"use client";

import { isBefore, startOfDay } from "date-fns";
import { cn } from "~/src/utils/string";

import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, footer, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const today = startOfDay(new Date()); // Lấy thời điểm bắt đầu của ngày hôm nay

  return (
    <DayPicker
      className={cn("p-3", className)}
      classNames={{
        months: "relative flex flex-col",
        month: "space-y-6",
        caption: "flex justify-center pt-1 relative items-center",
        month_caption: "flex justify-center items-center h-9",
        caption_label: "text-sm text-center font-medium",
        nav: "absolute w-full justify-between space-x-1 flex items-center",
        chevron: "fill-black h-5 w-5",
        day: "h-[38px] w-[38px]",
        day_button: "h-[38px] w-[38px] text-xs text-black",
        weekday: "text-sm text-cornflower-blue",
        selected: "bg-dodger-blue text-black rounded-full",
        range_start: "bg-dodger-blue [&>button]:font-bold [&>button]:text-vivid-blue",
        range_end: "bg-dodger-blue [&>button]:font-bold [&>button]:text-vivid-blue",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      modifiers={{
        beforeToday: (day) => isBefore(startOfDay(day), today), // Modifier để xác định ngày trước hôm nay
      }}
      modifiersClassNames={{
        beforeToday: "disabled-day",
      }}
      footer={footer}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
