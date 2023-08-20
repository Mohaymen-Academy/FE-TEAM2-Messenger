import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, Ref, forwardRef, useMemo } from "react";
import { merge } from "@/utils/merge";
import { FieldValues, UseFormRegister } from "react-hook-form";

export const inputVariants = cva(
  "mx-2 px-4 py-2.5 w-full text-base text-gray-900 bg-gray-200/60 border border-white dark:border-gray-800 dark:focus:border-blue-400 rounded-lg focus:border-blue-500 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white outline-none resize-none leading-6"
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  ref?: Ref<HTMLInputElement>;
  register?: UseFormRegister<FieldValues>;
  formId?: string;
  required?: boolean;
  patternFrom?: RegExp;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      children,
      type,
      formId,
      register,
      required,
      patternFrom,
      ...props
    },
    ref
  ) => {
    const registerValidator = useMemo(() => {
      if (register && formId)
        return register(formId, { required, pattern: patternFrom });
      return { register: "no Register" };
    }, [register]);

    return (
      <input
        ref={ref}
        type={type}
        className={merge(inputVariants(), className, {
          "focus:text-left text-right": type === "tel",
        })}
        {...registerValidator}
        {...props}
      >
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";

export default Input;
