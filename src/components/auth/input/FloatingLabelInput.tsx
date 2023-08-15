import React, { HTMLAttributes, ReactNode, useRef, useState } from "react";
import Input from "./Input";
import { merge } from "@/utils/merge";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { log } from "console";
import { Paragraph } from "@/components/ui";

export interface FloatingLabelInputProps
  extends HTMLAttributes<HTMLDivElement> {
  type: string;
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
  return (
    <div
      className={merge("flex flex-col-reverse relative mb-3", className)}
      {...props}
    >
      <Input
        type={type}
        className="border text-sm rounded-lg block w-full p-2.5 mx-0 peer transition-all  duration-300 focus:!placeholder-transparent"
        placeholder={label}
        register={register}
        patternFrom={patternFrom}
        formId={formId}
        required={required}
      />
      <label
        htmlFor="success"
        className="z-10 mb-2 text-sm font-medium translate-y-0 opacity-0 peer-focus:opacity-100  peer-focus:-translate-y-3 mr-2 absolute right-0.5 -top-2 transition-all duration-300"
      >
        <Paragraph size="xs" className="!text-blue">
          {label}
        </Paragraph>
      </label>
    </div>
  );
};

export default FloatingLabelInput;
