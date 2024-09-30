import { usePathname, useRouter } from "~/shared/libs/i18nNavigation";
import type { LocaleEnum } from "~/shared/utils/AppConfig";
import { AppConfig } from "~/shared/utils/AppConfig";

import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

import type { UseLocaleSwitcherProps } from "./type";

export function useLocaleNavigate({ onLocaleChange }: UseLocaleSwitcherProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const { Link, redirect } = createSharedPathnamesNavigation({
    locales: AppConfig.locales,
  });

  const handleLocaleNavigate = ({ key }: { key: string }): void => {
    if (key === currentLocale) {
      return;
    }

    const newLocale = key as LocaleEnum; // Cast key to LocaleEnum
    router.push(pathname, { locale: newLocale ?? currentLocale });
    router.refresh();
    if (onLocaleChange) {
      onLocaleChange(newLocale);
    }
  };

  const items = AppConfig.locales.map((elt) => ({
    key: elt,
    label: elt.toUpperCase(),
  }));

  return { currentLocale, items, handleLocaleNavigate, Link, redirect };
}
