import type React from "react";

interface FooterItemProps {
  title: string;
  contents: string[];
}

const FooterSection = ({ title, contents }: FooterItemProps) => {
  return (
    <div className="mt-5 flex flex-col font-bold">
      <div className="mt-5 text-xl">{title}</div>
      {contents.map((content) => (
        <div key={Math.random()} className="mt-5">
          {content}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  const FooterSections = [
    {
      title: "About service",
      contents: ["Frequently asked questions", "Contact", "Materials"],
    },
    {
      title: "About service",
      contents: ["Frequently asked questions", "Contact", "Materials"],
    },
    {
      title: "About service",
      contents: ["Frequently asked questions", "Contact", "Materials"],
    },
    {
      title: "About service",
      contents: ["Frequently asked questions", "Contact", "Materials"],
    },
  ];

  return (
    <div className="w-full bg-[#0b6ab3]">
      <div className="flex flex-col p-10">
        <h1 className="font-bold text-[42px] text-white">POC</h1>
        <div className="mt-5 grid grid-cols-1 text-white sm:grid-cols-2 lg:grid-cols-4">
          {FooterSections.map((section) => (
            <FooterSection key={Math.random()} title={section.title} contents={section.contents} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BaseTemplate = ({
  leftNav,
  rightNav,
  children,
}: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="sticky top-0 z-10 border-gray-300 border-b bg-white">
          <div className="flex justify-between px-6 py-2">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">{leftNav}</ul>
            </nav>
            <nav>
              <ul className="flex flex-wrap gap-x-3 text-xl">{rightNav}</ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export { BaseTemplate };
