import { useQuery } from "@tanstack/react-query";
import { axios } from "~/shared/libs/axios";
import type { ResponseDetailData } from "~/shared/types";
import type { DailyWorkingHours } from "../types";

export const getWorkingHours = (): Promise<ResponseDetailData<DailyWorkingHours>> => {
  return axios.get("/users");
};

export const useGetWorkingHours = () => {
  return useQuery({
    queryKey: ["DailyWorkingHours"],
    queryFn: () => getWorkingHours(),
  });
};
