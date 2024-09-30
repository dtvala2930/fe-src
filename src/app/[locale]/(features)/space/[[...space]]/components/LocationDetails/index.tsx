import { PhoneIcon, TrainIcon } from "~/shared/components/icons";

export default function LocationDetails() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Location Details</h2>
      {/* Phone Number */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[13px]">
          <PhoneIcon />
          <p className="font-bold">Phone Number</p>
        </div>
        <a className="text-sky-600" href="tel:0662123035" target="_blank" rel="noreferrer noopener">
          0662123035
        </a>
      </div>
      {/* Address */}
      <div className="flex items-center">
        <div className="flex flex-1 items-center gap-[13px]">
          <TrainIcon />
          <p className="font-bold">Address</p>
        </div>
        <a
          className="flex-1 text-sky-600"
          href="mailto:https://www.google.com/maps/search/?api=1&query=34.668754,135.503915"
          target="_blank"
          rel="noreferrer"
        >
          Osaka 中央区道頓堀 1-4-27 道頓堀ベニスビル1　2階
        </a>
      </div>
    </div>
  );
}
