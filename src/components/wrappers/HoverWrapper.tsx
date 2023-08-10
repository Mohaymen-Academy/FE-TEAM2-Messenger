import { merge } from "@/utils/merge";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const hoverWrapperVariants = cva(
  "flex items-center justify-between w-full hover:bg-hover cursor-pointer py-4 px-4 transition-all duration-200",
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

const HoverWrapper: React.FC<hoverWrapperProps> = ({
  rounded,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={merge(hoverWrapperVariants({ rounded, className }))}
      {...props}
    >
      {children}
    </div>
  );
};

HoverWrapper.displayName = "HoverWrapper";

export default HoverWrapper;
