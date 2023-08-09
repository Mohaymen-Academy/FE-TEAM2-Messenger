import { merge } from "@/utils/merge";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const hoverWrapperVariants = cva(
  "w-full hover:bg-hover cursor-pointer py-1 px-3",
  {
    variants: {
      rounded: {
        default: "rounded-2xl",
        lg: "rounded-3xl",
      },
    },
    defaultVariants: {
      rounded: "default",
    },
  }
);

interface hoverWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hoverWrapperVariants> {}

const HoverWrapper: React.FC<hoverWrapperProps> = ({ rounded, children }) => {
  return (
    <div className={merge(hoverWrapperVariants({ rounded }))}>{children}</div>
  );
};

HoverWrapper.displayName = "HoverWrapper";

export default HoverWrapper;
