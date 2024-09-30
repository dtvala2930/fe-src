import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "~/shared/utils";

const sectionVariants = cva("w-full max-w-[1024px]", {
  variants: {
    backgroundColor: {
      default: "bg-alice-blue",
      peach: "bg-peach-puff",
      none: "bg-none",
    },
    padding: {
      default: "px-[37px] py-8 rounded-[10px]",
    },
    titleColor: {
      default: "text-cornflower-blue",
      neon: "text-neon-carrot",
    },
    titleTextSize: {
      default: "text-2xl",
    },
    titleFontWeight: {
      default: "font-bold",
    },
  },
  defaultVariants: {
    backgroundColor: "default",
    padding: "default",
    titleColor: "default",
    titleTextSize: "default",
    titleFontWeight: "default",
  },
});

const titleVariants = cva("", {
  variants: {
    titleColor: {
      default: "text-cornflower-blue",
      neon: "text-neon-carrot",
    },
    titleTextSize: {
      default: "text-2xl",
    },
    titleFontWeight: {
      default: "font-bold",
    },
    titlePosition: {
      default: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    titleColor: "default",
    titleTextSize: "default",
    titleFontWeight: "default",
    titlePosition: "default",
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants>, VariantProps<typeof titleVariants> {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionLayout({
  backgroundColor,
  padding,
  title,
  titleColor,
  titleTextSize,
  titleFontWeight,
  titlePosition,
  children,
  className,
}: SectionProps) {
  return (
    <div className={cn(sectionVariants({ backgroundColor, padding }), className)}>
      {title && (
        <h2 className={cn(titleVariants({ titleColor, titleTextSize, titleFontWeight, titlePosition }), "mt-[10px]")}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
