import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, Ref, forwardRef } from "react";
import { merge } from "@/utils/merge";
import { ClipLoader } from "react-spinners";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none disabled:opacity-50  disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default:
          "bg-btn text-white hover:bg-btn-hover dark:bg-btn dark:text-slate-900 dark:hover:bg-slate-100",
        ghost:
          "bg-transparent hover:bg-btn-ghost dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100",
        rounded:
          "w-14 rounded-full dark:bg-sky-500 bg-cyan-400 dark:hover:bg-cyan-500 transition-all duration-300",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "h-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={merge(
          buttonVariants({
            size,
            variant,
            className,
          })
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ?  <ClipLoader className="mx-2" size={20}/> : null }
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
