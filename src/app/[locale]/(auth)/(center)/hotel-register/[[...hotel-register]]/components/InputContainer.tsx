import { Controller, useFormContext } from "react-hook-form";
import { Input } from "~/shared/components/base/input";
import { cn } from "~/shared/utils/string";

interface InputContainerProps {
  errorStyle: string;
  nameValue: string;
  inputTitle: string;
  placeHolder?: string;
  type?: string;
  className?: string;
}

const InputContainer = ({
  errorStyle,
  nameValue = "",
  inputTitle,
  placeHolder,
  type = "text",
  className = "",
}: InputContainerProps) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <div className={cn("mt-2 flex flex-col items-start justify-start", className)}>
      <div className="text-sm">{inputTitle}</div>
      <Controller
        control={control}
        name={nameValue}
        render={({ field: { value, ...fieldProps } }) => (
          <Input type={type} placeholder={placeHolder} value={value} {...fieldProps} autoComplete="on" />
        )}
      />
      {errors[nameValue] && <p className={errorStyle}>{errors[nameValue]?.message?.toString()}</p>}
    </div>
  );
};

export default InputContainer;
