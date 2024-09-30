"use client";

import LocaleSwitcher from "~/shared/components/LocaleSwitcher";
import { AppConfig } from "~/shared/utils/AppConfig";
import { LogOutButton } from "~/src/components/LogOutButton";
import { BaseTemplate } from "~/templates/BaseTemplate";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <BaseTemplate
      leftNav={<h1 className="font-bold text-3xl text-gray-900">{AppConfig.name}</h1>}
      rightNav={
        <>
          <LogOutButton />
          <LocaleSwitcher />
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}

export const dynamic = "force-dynamic";
