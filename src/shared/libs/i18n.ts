import { AppConfig, type LocaleEnum } from "~/src/utils/AppConfig";

import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  const localeValue = locale as LocaleEnum;

  if (!AppConfig.locales.includes(localeValue)) notFound();

  const timeZone = AppConfig.timeZoneMap[localeValue] || "UTC";

  return {
    messages: (await import(`../../locales/${locale}.json`)).default,
    timeZone,
  };
});
