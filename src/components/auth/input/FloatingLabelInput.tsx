import React, { HTMLAttributes, ReactNode, useRef, useState } from "react";
import Input from "./Input";
import { merge } from "@/utils/merge";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface FloatingLabelInputProps
  extends HTMLAttributes<HTMLDivElement> {
  type: string;
  borderWidth?: number;
  removeBorderColor?: string;
  dropDown?: boolean;
  label?: string;
  register?: UseFormRegister<FieldValues>;
  formId?: string;
  required?: boolean;
  patternFrom?: RegExp;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type,
  borderWidth,
  removeBorderColor,
  dropDown,
  className,
  register,
  required,
  patternFrom,
  formId,
  children,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = register?.(formId as string) as
    | UseFormRegister<FieldValues>
    | undefined;

  console.log(inputRef?.ref, "cher");

  const handleFocus = () => {
    setIsFocused((prevIsFocused) => !prevIsFocused);
  };

  const handleClick = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={merge("relative", className)} {...props}>
      <div
        className={`absolute h-[1px] top-0 right-[16px] dark:bg-slate-800 bg-gray-200 z-20`}
        style={{
          width: `${borderWidth}px`,
          backgroundColor: removeBorderColor,
        }}
      ></div>

      <label
        className={`absolute right-4 select-none h-0 w-0 overflow-visible whitespace-nowrap transition-all duration-200 cursor-text z-30  ${
          isFocused
            ? "-top-3.5 right-[22px] text-cyan-600 text-sm peer"
            : "top-3 right-4 text-gray-600 text-base"
        }`}
        onClick={handleClick}
      >
        {label}
      </label>

      <div className="flex items-center gap-2">
        <Input
          type={type}
          onFocus={handleFocus}
          onBlur={handleFocus}
          className="m-0"
          register={register}
          patternFrom={patternFrom}
          formId={formId}
          required={required}
        />

        {dropDown && (children as ReactNode)}
      </div>
    </div>
  );
};

export default FloatingLabelInput;
