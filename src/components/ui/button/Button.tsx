import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { merge } from "@/utils/merge";
import { ClipLoader } from "react-spinners";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none disabled:opacity-50  disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default:
          "bg-slate-700 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100",
      },
      size: {
        default: "h-10 p-3",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      // square: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, variant, isLoading, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={merge(
        buttonVariants({
          variant,
          // square,
          size,
          className,
        })
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <ClipLoader /> : null}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
