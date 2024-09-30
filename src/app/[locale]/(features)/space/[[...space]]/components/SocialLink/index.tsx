"use client";

import { FacebookIconMUI, InstagramIcon, LanguageIcon, LinkIcon, TwitterIcon } from "~/shared/components/icons";

export default function SocialLink() {
  return (
    <div className="mt-[22px] flex justify-between">
      <div className="flex items-center gap-[13px]">
        <LanguageIcon />
        <p className="font-bold">Social Link</p>
      </div>
      <div className="flex cursor-pointer items-center gap-[23px]">
        <LinkIcon />
        <FacebookIconMUI />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
