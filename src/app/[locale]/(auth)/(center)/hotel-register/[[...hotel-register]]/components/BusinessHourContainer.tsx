import { Controller, useFormContext } from "react-hook-form";
import TimePicker from "./TimePicker";

interface BusinessHourContainerProps {
  errorStyle: string;
  date: string;
}

const BusinessHourContainer = ({ errorStyle, date }: BusinessHourContainerProps) => {
  date = date.toLowerCase();

  const dateOpenHour = `${date}OpenHour`;
  const dateCloseHour = `${date}CloseHour`;

  const {
    trigger,
    setValue,
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <div>
      <div className="font-bold text-sm capitalize">{date}</div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="flex items-center">
          <div>Open:</div>
          <div className="flex-1">
            <Controller
              control={control}
              name={dateOpenHour}
              render={({ field: { value } }) => (
                <TimePicker
                  initialTime={value}
                  onTimeChange={(time: string) => {
                    setValue(dateOpenHour, time);
                    trigger(dateOpenHour);
                    trigger(dateCloseHour);
                  }}
                  timeLabel=""
                />
              )}
            />
            {errors[dateOpenHour] && (
              <p className={`${errorStyle} text-end`}>{errors[dateOpenHour].message?.toString()}</p>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div>Close:</div>
          <div className="flex-1">
            <Controller
              control={control}
              name={dateCloseHour}
              render={({ field: { value } }) => (
                <TimePicker
                  initialTime={value}
                  onTimeChange={(time: string) => {
                    setValue(dateCloseHour, time);
                    trigger(dateCloseHour);
                    trigger(dateOpenHour);
                  }}
                  timeLabel=""
                />
              )}
            />
            {errors[dateCloseHour] && (
              <p className={`${errorStyle} text-end`}>{errors[dateCloseHour].message?.toString()}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHourContainer;
