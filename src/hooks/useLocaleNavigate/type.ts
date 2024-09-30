import type { LocaleEnum } from "~/shared/utils/AppConfig";

export interface UseLocaleSwitcherProps {
  onLocaleChange?: (newLocale: LocaleEnum) => void;
}
