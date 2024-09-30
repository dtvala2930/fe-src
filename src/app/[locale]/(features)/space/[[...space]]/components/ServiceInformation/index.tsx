import React from "react";
import { cn } from "~/shared/utils";
import {
  CalendarIcon,
  ChargeIcon,
  CurrencyIcon,
  ElevatorIcon,
  EnglishSupportIcon,
  SmokingIcon,
  TrainIcon,
  WifiIcon,
} from "~/src/components/icons";

function ServiceItem({
  icon,
  description,
  disabled = false,
  color = "#0b6ab3",
}: {
  icon: React.ReactElement;
  description: string;
  disabled?: boolean;
  color?: string;
}) {
  return (
    <div className="flex w-[25%] flex-col gap-5 p-4">
      <span
        className={cn("grid place-items-center", {
          "cursor-not-allowed opacity-30": disabled,
        })}
      >
        {React.cloneElement(icon, { color })}
      </span>
      <p
        className={cn("whitespace-pre-line text-center text-[10px] text-cobalt-blue", {
          "text-opacity-30": disabled,
        })}
      >
        {description}
      </p>
    </div>
  );
}

export default function ServiceInformation() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Hotel Information</h2>
      <div className="flex flex-wrap items-start justify-between rounded-[6px] border border-cobalt-blue border-solid p-[10px]">
        <ServiceItem
          icon={<TrainIcon />}
          description="5 minutes walk
from Kintetsu-NippombashiStation"
        />
        <ServiceItem icon={<CalendarIcon />} description="Can book on the day" />
        <ServiceItem
          icon={<CurrencyIcon />}
          description="On-Site Payment
Available"
          disabled={true}
        />
        <ServiceItem
          icon={<ElevatorIcon />}
          description="Elevators
Available"
        />
        <ServiceItem
          icon={<WifiIcon height={24} width={24} />}
          description="Wi-Fi
Available"
        />
        <ServiceItem
          icon={<ChargeIcon height={24} width={24} />}
          description="Power outlet
Available"
        />
        <ServiceItem
          icon={<SmokingIcon />}
          description="English Support
  Available"
        />
        <ServiceItem
          icon={<EnglishSupportIcon height={24} width={24} />}
          description="Smoking/Non-smoking Area
Available"
        />
      </div>
    </div>
  );
}
