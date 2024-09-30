"use client";

export default function MakeOrderLayout(props: { children: React.ReactNode }) {
  return <div className="my-[50px] flex items-center justify-center max-md:px-6">{props.children}</div>;
}

export const dynamic = "force-dynamic";
