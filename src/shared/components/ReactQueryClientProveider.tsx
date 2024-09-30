"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/react-query";

export const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
