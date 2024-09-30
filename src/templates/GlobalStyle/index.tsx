"use client";

import "~/styles/global.css";

import type { ReactNode } from "react";
import {} from "../styles/themes/themeVariables";

export default function GlobalStyleProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
