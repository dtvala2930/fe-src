import { cn } from "~/shared/utils";
import { ChargeIcon, UploadIcon, WifiIcon } from "~/src/components/icons";

function UtilityItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "flex min-h-[26px] items-center rounded-[20px] border border-solid px-2 text-[8px]/[12px]",
        className,
      )}
    >
      {children}
    </li>
  );
}

export default function BasicInformation() {
  return (
    <div className="flex flex-col gap-3 text-nowrap">
      {/* Name Hotel */}
      <h2 className="font-bold text-xl">Bouti city Capusle inn</h2>
      {/* Review  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="font-bold text-base">4.0</p> {/* Score */}
          <div className="flex items-center">
            <span className="relative h-[10px] w-[50px] before:absolute before:top-0 before:left-0 before:h-[10px] before:text-[10px]/[10px] before:content-['★★★★★'] after:absolute after:top-0 after:left-0 after:h-[10px] after:text-[10px]/[10px] after:text-orange-400 after:content-['★★★★★']" />
          </div>
          {/* Star */}
          <p className="font-bold text-[12px]/[20px] text-zinc-300">(Number of Review : 1)</p> {/* Number of Review */}
        </div>
        {/* Share Button */}
        <button className="flex items-center gap-[6px]" type="button">
          <UploadIcon />
          Share
        </button>
      </div>
      {/* Utilities */}
      <ul className="flex gap-2">
        <UtilityItem className="border-cornflower-blue bg-alice-blue text-cornflower-blue">
          <WifiIcon />
          WiFi available
        </UtilityItem>
        <UtilityItem className="border-yellow-500 bg-ivory-yellow text-yellow-500">
          <ChargeIcon />
          Charge Available
        </UtilityItem>
      </ul>
    </div>
  );
}
