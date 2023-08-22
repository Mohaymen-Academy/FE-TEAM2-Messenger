import React, { useState, useRef, KeyboardEvent, useEffect } from "react";
import Input from "./Input";

interface confirmationInputProps {
  length?: number;
  submit: (e: any) => any;
}

const ConfirmationInput: React.FC<confirmationInputProps> = ({
  length,
  submit,
}) => {
  const [codes, setCodes] = useState<string[]>(Array(length).fill(""));
  const codeRefs = useRef<HTMLInputElement[]>([]);
  

  const handleChange = (index: number, value: string) => {
    if (!length) return;
    if (/^\d*$/.test(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      if (value !== "" && index < length - 1) {
        codeRefs.current[index + 1].focus();
      }
    }
  };

  useEffect(() => {
    if (codes[4].length === 1) {
      submit(codes.join(""));
    }
  }, [codes[4]]);

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && codes[index] === "") {
      codeRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-row-reverse w-full max-w-sm">
      {codes.map((code, index) => (
        <Input
          key={index}
          ref={(ref) => (codeRefs.current[index] = ref as HTMLInputElement)}
          type="text"
          maxLength={1}
          value={code}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyPress(e, index)}
          className="text-center h-14 text-2xl p-2 mx-1 sm:mx-2"
        />
      ))}
    </div>
  );
};

export default ConfirmationInput;
