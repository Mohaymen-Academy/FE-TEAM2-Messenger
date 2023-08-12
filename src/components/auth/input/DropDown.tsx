// @ts-nocheck
import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { useDispatch } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
// import CountryFlag from "react-country-flag";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";

const dropDownButtonVariants = cva(
  "inline-flex justify-between px-2  py-2 text-sm font-medium rounded-md  text-slate-700 h-[44px] w-24 dark:bg-gray-800 bg-white"
);

const dropDownBoxVariants = cva(
  "origin-top-right absolute right-0 mt-2 rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 w-24 overflow-hidden bg-white"
);

const Dropdown = ({ items }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState({
    dialCode: "98",
    country: "IR",
  });

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <Button
          variant="ghost"
          onClick={toggleDropdown}
          className={dropDownButtonVariants()}
        >
          <Paragraph className="mb-0">{activeItem.dialCode}+</Paragraph>
          <CountryFlag svg countryCode={activeItem.country} />

          <MdArrowDropDown size={30} className="dark:text-gray-200" />
        </Button>
      </div>

      {isOpen && (
        <div className={dropDownBoxVariants()}>
          <div>
            {items.map((item) => (
              <div
                key={item.country}
                href="#"
                className="flex justify-between items-center px-4 py-2 z-30 text-sm text-gray-700 dark:hover:bg-gray-700 hover:text-gray-900 text-right hover:cursor-pointer hover:bg-gray-200"
                onClick={() => handleItemClick(item)}
              >
                <Paragraph className="mb-0">{item.dialCode}+</Paragraph>
                {/* <CountryFlag svg countryCode={item.country} /> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
