import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/shared/components/base/select";
import type { SelectContainerProps } from "../types";

const SelectContainer = ({
  errorStyle,
  data,
  placeHolder = "Select value",
  nameValue,
  selectTitle,
}: SelectContainerProps) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="text-sm">{selectTitle}</div>
      <Controller
        control={control}
        name={nameValue}
        render={({ field: { value, ...fieldProps } }) => (
          <Select onValueChange={fieldProps.onChange} defaultValue={value}>
            <SelectTrigger>
              <SelectValue placeholder={placeHolder} />
            </SelectTrigger>
            <SelectContent>
              {data.map((group) => (
                <SelectGroup key={group.label}>
                  <SelectLabel>{group.label}</SelectLabel>
                  {group.items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors[nameValue] && <p className={errorStyle}>{errors[nameValue].message?.toString()}</p>}
    </div>
  );
};

export default SelectContainer;
