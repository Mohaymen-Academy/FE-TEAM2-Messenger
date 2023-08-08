import { VariantProps, cva } from "class-variance-authority";
import React, { InputHTMLAttributes, Ref, forwardRef } from "react";
import { merge } from "@/utils/merge";

export const inputVariants = cva(
  "mx-2 px-3 py-2.5 w-full text-base text-gray-900 bg-white ring-1 ring-white dark:ring-gray-800 dark:focus:ring-blue-400 rounded-lg focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white outline-none resize-none leading-6"
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  ref?: Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={merge(
          inputVariants({
            className,
          })
        )}
        {...props}
      >
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";

export default Input;
