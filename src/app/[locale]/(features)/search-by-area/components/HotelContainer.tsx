"use client";
import { Backpack, CircleIcon, Clock, Luggage, MapPin, TriangleIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "~/shared/components/base/table";
import type { HotelContainerItemProps } from "../types";
import HotelCarousel from "./HotelCarousel";

const HotelContainer = ({
  hotelName = "Hotel name",
  nearestStation = "Content",
  minutesWalkFromStation,
  todayOpenHour,
  todayCloseHour,
  maxSuitcaseSize,
  maxBagSize,
  hotelImgs,
}: HotelContainerItemProps) => {
  return (
    <div className="mt-5 w-full rounded-xl bg-white pb-7">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="w-full p-7">
            <HotelCarousel hotelImgs={hotelImgs} />
          </div>
          <div className="w-full ps-7 pe-4 pt-7 pb-7 sm:ps-0">
            <Link href={"/space"}>
              <h1 className="font-bold text-[1.275rem]">{hotelName}</h1>
            </Link>
            <div className="mt-2 flex text-gray-500">
              <div className="flex w-fit">
                <MapPin className="h-4 w-4" />
                <span className="ms-1 text-[.75rem]">
                  {minutesWalkFromStation} minutes walk from {nearestStation}
                </span>
              </div>
              <div className="ms-2 flex w-fit">
                <Clock className="h-4 w-4" />
                <span className="ms-1 text-[.75rem]">
                  Today's business hours : {todayOpenHour} ~ {todayCloseHour}
                </span>
              </div>
            </div>
            <div className="mt-2 flex text-gray-500">
              <span className="ms-1 text-[.75rem]"> Number of packages that can be stored </span>
            </div>
            <div className="mt-2 flex text-gray-500">
              <Luggage className=" ms-2 h-4 w-4 stroke-slate-500 text-gray-500" />
              <span className="ms-2 text-[.75rem] text-gray-500">
                Suitecase size: <span className="font-bold"> {maxSuitcaseSize} </span>
              </span>
              <Backpack className="ms-2 h-4 w-4 stroke-slate-500 text-gray-500" />
              <span className="ms-2 text-[.75rem] text-gray-500">
                Bag size: <span className="font-bold"> {maxBagSize} </span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="overflow-x-auto pe-7 pr-7 pl-7">
            <Table className="text-center">
              <TableHeader>
                <TableRow className="border border-[#c5c5c5]">
                  <TableCell
                    colSpan={7}
                    className="border border-[#c5c5c5] bg-gray-200 p-1 text-center text-[12px] text-gray-500"
                  >
                    Availability time
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* TODO: (Hao): Chua lay duoc thong tin lich cua hotel trong tuan */}
                <TableRow>
                  <TableCell className="border border-[#c5c5c5]">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs">9/20 Fri</span>
                      <TriangleIcon className="mt-2" color="gray" strokeWidth={3} size={14} />
                    </div>
                  </TableCell>
                  <TableCell className="border border-[#c5c5c5]">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs">9/20 Fri</span>
                      <TriangleIcon className="mt-2" color="gray" strokeWidth={3} size={14} />
                    </div>
                  </TableCell>
                  <TableCell className="border border-[#c5c5c5]">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs">9/20 Fri</span>
                      <TriangleIcon className="mt-2" color="gray" strokeWidth={3} size={14} />
                    </div>
                  </TableCell>
                  <TableCell className="border border-[#c5c5c5]">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs">9/20 Fri</span>
                      <TriangleIcon className="mt-2" color="gray" strokeWidth={3} size={14} />
                    </div>
                  </TableCell>
                  <TableCell className="border border-[#c5c5c5]">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs">9/20 Fri</span>
                      <TriangleIcon className="mt-2" color="gray" strokeWidth={3} size={14} />
                    </div>
                  </TableCell>
                  <TableCell className="border border-[#c5c5c5]">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs">9/20 Fri</span>
                      <CircleIcon className="mt-2" color="blue" strokeWidth={3} size={14} />
                    </div>
                  </TableCell>
                  <TableCell className="border border-[#c5c5c5]">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs">9/20 Fri</span>
                      <XIcon className="mt-2" color="red" strokeWidth={3} size={14} />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link
            href={"/space"}
            className="mt-5 grid h-[40px] place-items-center rounded-full border-2 border-[#0b6ab3] bg-[#0b6ab3] font-bold text-white hover:bg-white hover:text-[#0b6ab3] sm:w-[360px]"
          >
            Reserve this hotel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelContainer;
