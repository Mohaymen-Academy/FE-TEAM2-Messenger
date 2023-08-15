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
      type: {
        inActive: "",
        active: "bg-green-300 dark:bg-blue-600",
      },
    },
    defaultVariants: {
      rounded: "default",
      type: "inActive",
    },
  }
);

interface hoverWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hoverWrapperVariants> {}

const HoverWrapper: React.FC<hoverWrapperProps> = ({
  rounded,
  type,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={merge(hoverWrapperVariants({ rounded, type, className }))}
      {...props}
    >
      {children}
    </div>
  );
};

HoverWrapper.displayName = "HoverWrapper";

export default HoverWrapper;
