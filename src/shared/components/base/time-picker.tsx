import type React from "react";
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

export interface TimePickerProps {
  initialTime?: string;
  timeLabel?: string;
  timePlaceholder?: string;
  step?: number;
  labelClassName?: string;
  handleSetTime: (value: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  initialTime = "00:00",
  timeLabel = "Time",
  timePlaceholder = "Select time",
  step = 30,
  labelClassName,
  handleSetTime,
}) => {
  const [selectedTime, setSelectedTime] = useState(initialTime);

  const timeOptions = useMemo(() => generateTimeOptions(step), [step]);

  return (
    <div className="flex flex-col items-start space-y-2">
      {timeLabel && (
        <label htmlFor="time-picker" className={labelClassName}>
          {timeLabel}
        </label>
      )}
      <Select
        value={selectedTime}
        onValueChange={(value) => {
          handleSetTime(value);
          setSelectedTime(value);
        }}
      >
        <SelectTrigger id="time-picker" className="w-[80%]">
          <SelectValue placeholder={timePlaceholder} />
        </SelectTrigger>
        <SelectContent className="max-h-[200px] overflow-y-auto">
          {timeOptions.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const generateTimeOptions = (step: number) => {
  const times = [];
  let time = 0;
  while (time < 24 * 60) {
    const hours = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const minutes = (time % 60).toString().padStart(2, "0");
    times.push(`${hours}:${minutes}`);
    time += step;
  }
  return times;
};

export default TimePicker;
