export interface SelectItem {
  value: string;
  label: string;
}

export interface SelectGroup {
  label: string;
  items: SelectItem[];
}

export interface BusinessHourContainerProps {
  errorStyle: string;
  date: string;
}

export interface SelectContainerProps {
  errorStyle: string;
  data: SelectGroup[];
  placeHolder?: string;
  nameValue: string;
  selectTitle: string;
}

export interface InputContainerProps {
  errorStyle: string;
  nameValue: string;
  inputTitle: string;
  placeHolder?: string;
  type?: string;
  className?: string;
}

export interface TimePickerProps {
  initialTime?: string;
  onTimeChange?: (time: string) => void;
  timeLabel?: string;
  timePlaceholder?: string;
  step?: number;
  labelClassName?: string;
}
