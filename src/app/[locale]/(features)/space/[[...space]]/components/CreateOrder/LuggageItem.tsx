import type { ReactElement } from "react";
import CountLuggageButton from "~/shared/components/CountLuggageButton";

export default function LuggageItem({
  name,
  icon,
  title,
  min,
  max,
}: {
  name: string;
  icon: ReactElement;
  title: string;
  min: number;
  max: number;
}) {
  return (
    <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-[9px]">
        {icon}
        <p className="font-bold text-base">{title}</p>
      </div>
      <CountLuggageButton name={name} min={min} max={max} className="justify-between md:gap-2" />
    </div>
  );
}
