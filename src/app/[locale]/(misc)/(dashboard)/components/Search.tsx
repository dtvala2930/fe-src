"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { Input } from "~/shared/components";
import { DatePicker } from "~/shared/components/base/datepicker";
import TimePicker from "~/shared/components/base/time-picker";
// import { DatePicker } from "~/shared/components/base/date-picker";

const SearchForm = () => {
  const [_, setTextValue] = useState<string>("");
  const [time, setTime] = useState<{
    checkInTime: string;
    receivingTime: string;
  }>({
    checkInTime: "",
    receivingTime: "",
  });

  const handleTimeSearch = (value: string, id: string) => {
    switch (true) {
      case id === "Check-in":
        setTime((prevTime) => {
          return { ...prevTime, checkInTime: value };
        });
        break;
      case id === "Receiving":
        setTime((prevTime) => {
          return { ...prevTime, receivingTime: value };
        });
        break;
      default:
        setTime((prevTime) => {
          return { ...prevTime };
        });
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl md:px-4 md:py-3 lg:flex-row lg:bg-white">
      <div className="flex w-full flex-1 flex-col lg:border-r-2">
        <strong className="my-1 pl-1 font-bold text-[.75rem] text-black leading-[1.0625rem] lg:block">Area</strong>
        <Input
          className="h-full w-full rounded-xl bg-white px-3 py-3.5 pl-1 font-normal text-[.75rem] text-black focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 lg:h-4 lg:border-none"
          placeholder="Enter area"
          onChange={(e) => setTextValue(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-1 cursor-pointer flex-col lg:border-r-2">
        <strong className="my-1 pl-1 font-bold text-[.75rem] text-black leading-[1.0625rem] lg:block">
          Deposit date and time
        </strong>
        <DatePicker
          footer={
            <div className="flex justify-between px-3">
              <TimePicker labelClassName="" timeLabel="Check-in Time" handleSetTime={() => console.log("Aa")} />
              <TimePicker labelClassName="" timeLabel="Receiving Time" handleSetTime={() => console.log("BB")} />
            </div>
          }
          className="h-full w-full rounded-xl bg-white px-3 py-3.5 pl-1 font-normal text-[.75rem] shadow-none hover:bg-transparent focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 lg:h-4 lg:border-none"
        />{" "}
      </div>
      <Link
        href={"/search-by-area"}
        onClick={() => {}}
        // disabled={!textValue}
        className="rounded-3xl bg-medium-blue p-3 align-middle hover:bg-[#5ac8fa] md:w-full md:p-5 lg:h-auto lg:max-w-8 lg:rounded-[60%] lg:p-2"
      >
        <MagnifyingGlassIcon color="white" className="hidden h-full w-full lg:block " />
        <span className="block text-center text-[.875rem] text-white lg:hidden">
          Find a place to leave your luggage
        </span>
      </Link>
    </div>
  );
};

export default SearchForm;
