import createMiddleware from "next-intl/middleware";

import { AppConfig } from "./shared/utils/AppConfig";

export default createMiddleware({
  // A list of all locales that are supported
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  // Used when no locale matches
  defaultLocale: AppConfig.defaultLocale,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next|monitoring).*)", "/", "/(api|trpc)(.*)"], // Also exclude tunnelRoute used in Sentry from the matcher
};
