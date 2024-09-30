"use client";

import { DividerVerticalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "~/shared/components/base/button";
import { DatePicker } from "~/shared/components/base/datepicker";
import { Input } from "~/shared/components/base/input";

const SearchContainer = () => {
  const lastUpdated = "2024/9/20";
  const [area, setArea] = useState<string>("");

  return (
    <>
      <div className="relative z-2 flex items-center justify-center">
        <div className="-mt-[70px] w-3/4 p-3 lg:w-3/5 lg:p-0">
          <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 sm:gap-0">
            <div className="flex h-[50px] w-full items-center rounded-lg rounded-r-lg bg-[#f1f1f1] text-gray-500 sm:rounded-r-none">
              <MagnifyingGlassIcon className="ms-3 h-4 w-4 stroke-slate-500 text-gray-500" />
              <Input
                value={area}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArea(e.target.value)}
                placeholder="Area"
                className="me-[20px] h-full w-full border-0 bg-transparent focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="flex items-center">
              <div className="me-1 flex h-[50px] w-full items-center rounded-lg rounded-l-lg bg-[#f1f1f1] text-gray-500 sm:me-0 sm:rounded-l-none">
                <DividerVerticalIcon className="hidden h-16 w-6 sm:block" />
                <DatePicker className="border-none bg-transparent hover:bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-5 sm:p-0">
        <Button
          className="mt-5 h-[40px] w-full rounded-full border-2 border-[#0b6ab3] bg-[#0b6ab3] font-bold text-white hover:bg-white hover:text-[#0b6ab3] sm:w-[50%] lg:w-[30%]"
          disabled={!area}
        >
          See nearby hotel
        </Button>
        <p className="mt-7 text-gray-500 text-xs pb-5">Last update: {lastUpdated}</p>
      </div>
    </>
  );
};

export default SearchContainer;
