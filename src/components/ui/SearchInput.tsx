import Input from "@/components/auth/input/Input";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {RiCloseCircleFill} from "react-icons/ri"

const SearchInput = ({ placeHolder }: { placeHolder: string }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleClearInput = () => {
      setInputValue("");
    };
  return (
    <form className="flex items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 right-3 flex items-center pl-3 dark:text-white">
          {inputValue ? (
            <div onClick={handleClearInput} className="hover:cursor-pointer">
              <RiCloseCircleFill
                size={24}
              />
            </div>
          ) : (
            <CiSearch size={24} />
          )}
        </div>

        <Input
          dir="rtl"
          className="rounded-3xl transition-all duration-300 bg-gray-200 w-full m-0 pr-12"
          placeholder={placeHolder}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default SearchInput;














