"use client";

import Link from "next/link";

// import { useRouter } from 'next/navigation';
// import { useTranslations } from "next-intl";

type ButtonHeaderType = {
  id: number;
  title: string;
  link: string;
};

const BUTTON_HEADER_DATA: ButtonHeaderType[] = [
  { id: 1, title: "New Account", link: "/" },
  { id: 2, title: "Login", link: "/sign-in" },
  { id: 3, title: "Register as owner", link: "/hotel-register" },
];

const LogOutButton = () => {
  // const router = useRouter();
  // const { signOut } = useClerk();
  // const t = useTranslations("DashboardLayout");

  return (
    <>
      {BUTTON_HEADER_DATA.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.link}
            className="flex h-[34px] cursor-pointer items-center rounded-3xl border-[#0b6ab3] border-[1px] border-solid px-[20px] text-[#0b6ab3] text-[.75rem] hover:bg-[#EEF5FC]"
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
};

export { LogOutButton };
