import { useQuery } from "@tanstack/react-query";
import { axios } from "~/shared/libs/axios";
import type { ResponseData } from "~/shared/types";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const getCustomers = (): Promise<ResponseData<any>> => {
  return axios.get("/hotel");
};

export const useGetCustomers = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () => getCustomers(),
  });
};
