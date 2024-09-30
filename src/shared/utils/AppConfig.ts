import enUS from "antd/lib/locale/en_US";
import jaJP from "antd/lib/locale/ja_JP";
import viVN from "antd/lib/locale/vi_VN";
import type { LocalePrefix } from "node_modules/next-intl/dist/types/src/routing/types";

export enum LocaleEnum {
  vi = "vi",
  en = "en",
  ja = "ja",
}

const localePrefix: LocalePrefix = "as-needed";

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: "POC",
  locales: [LocaleEnum.en, LocaleEnum.vi, LocaleEnum.ja],
  defaultLocale: LocaleEnum.en,
  localePrefix,
  timeZoneMap: {
    [LocaleEnum.en]: "America/Los_Angeles",
    [LocaleEnum.vi]: "Asia/Ho_Chi_Minh",
    [LocaleEnum.ja]: "Asia/Tokyo",
  },
};

export const LocaleProviderAnt = (locale: LocaleEnum) => {
  switch (locale) {
    case LocaleEnum.en:
      return enUS;
    case LocaleEnum.ja:
      return jaJP;
    default:
      return viVN;
  }
};

export const REGEX = {
  TIME: /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/,
};
