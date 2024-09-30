"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "~/shared/libs/i18nNavigation";
import { AppConfig, type LocaleEnum } from "~/shared/utils/AppConfig";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../base/select";
import { LanguageIcon } from "../icons";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (data: string) => {
    router.push(pathname, { locale: data as LocaleEnum });
    router.refresh();
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="flex h-[34px] flex-1 cursor-pointer items-center rounded-xl border-none px-[5px] text-center text-[.75rem] hover:border-none focus:border-none focus:ring-white">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <LanguageIcon fontSize="small" className="mr-1" />
              <span className="text-[.75rem]">{locale.toUpperCase()}</span>
            </div>
          }
          defaultValue={locale}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="ml-[20%] flex flex-col items-center justify-center">
          {AppConfig.locales.map((elt) => (
            <SelectItem key={elt} value={elt}>
              {elt.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
