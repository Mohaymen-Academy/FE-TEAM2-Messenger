import React, { HTMLAttributes, Ref, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { merge } from "@/utils/merge";

const paragraphVariants = cva("text-slate-900 dark:text-white select-none", {
  variants: {
    size: {
      default: "text-base sm:text-lg",
      xs: "text-xs sm:text-sm",
      sm: "text-sm sm:text-base",
      lg: "text-lg sm:text-xl",
      xl: "text-xl sm:text-2xl",
      "2xl": "text-2xl sm:text-3xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  ref?: Ref<HTMLParagraphElement>;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={merge(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
