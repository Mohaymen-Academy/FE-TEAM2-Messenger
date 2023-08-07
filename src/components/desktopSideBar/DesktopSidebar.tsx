import React from "react";
import Button from "../ui/button/Button";
import { BsFillPersonFill } from "react-icons/bs";
import ThemeToggle from "../conversation/ThemeToggle";

const DesktopSidebar = () => {
  return (
    <div className="flex flex-col justify-between p-3 border-l dark:border-gray-700 items-center">
      <div className="flex flex-col gap-4">
        <Button>
          <BsFillPersonFill classNames="icon" />
        </Button>
        <Button variant="default" className="">
          <BsFillPersonFill />
        </Button>
        <Button variant="default" className="">
          <BsFillPersonFill />
        </Button>
        <Button variant="default" className="">
          <BsFillPersonFill />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button variant="default" className="">
          <BsFillPersonFill />
        </Button>
        <Button variant="default" className="">
          <BsFillPersonFill />
        </Button>
        <ThemeToggle />
        <div className="w-full aspect-square bg-orange-400 rounded-full text-3xl grid place-content-center">
          A
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
