import { forIn } from "lodash";
import { AppConfig } from "./AppConfig";

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === AppConfig.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

/**
 *
 * @param requestParam
 * @returns
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const formSearchSubmitRequestParamOnlyData = (requestParam: any): string => {
  let conditions = "";
  forIn(requestParam, (value: string | number, key: string) => {
    const conditionSymbol = conditions === "" ? "?" : "&";
    if (value || value === 0) {
      conditions += `${conditionSymbol}${key}=${value}`;
    }
  });
  return conditions;
};
