"use client";

import { memo, useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AddIcon, RemoveIcon } from "~/shared/components/icons";
import { cn } from "~/shared/utils";
import { Button, FormControl, FormField, FormItem, FormMessage, Input } from "~/src/components/base";

function CountUpButton({
  handleCountUp,
  max,
  currentCount,
}: { handleCountUp: () => void; max: number; currentCount: number }) {
  return (
    <Button
      className={cn("h-8 w-8 rounded-full bg-light-blue", { "bg-light-sky-blue": max === currentCount })}
      onClick={handleCountUp}
      type="button"
    >
      <AddIcon sx={{ color: "#ffffff" }} />
    </Button>
  );
}

function CountDownButton({
  handleCountDown,
  min,
  currentCount,
}: { handleCountDown: () => void; min: number; currentCount: number }) {
  return (
    <Button
      className={cn("h-8 w-8 rounded-full bg-light-blue", { "bg-light-sky-blue": min === currentCount })}
      onClick={handleCountDown}
      type="button"
    >
      <RemoveIcon sx={{ color: "#ffffff" }} />
    </Button>
  );
}

function CountLuggageButton({
  name,
  min,
  max,
  className = "",
}: { name: string; min: number; max: number; className?: string }) {
  const [count, setCount] = useState<number>(0);

  const onCountUp = useCallback(
    (onChange: (value: number) => void) => {
      if (count < max) {
        const newCount = count + 1;
        setCount(newCount);
        onChange(newCount);
      }
    },
    [count, max],
  );

  const onCountDown = useCallback(
    (onChange: (value: number) => void) => {
      if (count > min) {
        const newCount = count - 1;
        setCount(newCount);
        onChange(newCount);
      }
    },
    [count, min],
  );

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormControl>
              <Input
                type="number"
                min={min}
                max={max}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setCount(value);
                  field.onChange(value); // Update form value
                }}
                className="hidden"
              />
            </FormControl>
            <div className={cn("flex items-center gap-2", className)}>
              <CountDownButton handleCountDown={() => onCountDown(field.onChange)} min={min} currentCount={count} />
              <p className="grid h-7 w-7 place-items-center text-center font-bold">{count}</p>
              <CountUpButton handleCountUp={() => onCountUp(field.onChange)} max={max} currentCount={count} />
              <FormMessage />
            </div>
          </FormItem>
        );
      }}
    />
  );
}

export default memo(CountLuggageButton);
