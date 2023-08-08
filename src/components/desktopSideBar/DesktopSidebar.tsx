import Button from "../ui/button/Button";
import { useState } from "react";
import { clsx } from "clsx";
import ThemeToggle from "../conversation/ThemeToggle";
import {
  BsBroadcastPin,
  BsFillPeopleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { FiEdit2, FiSettings } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSection } from "@/redux/Slices/conversationSlice";
import Avatar from "../ui/avatar/Avatar";
import test from "../../assets/img/darkBg.svg";

const DesktopSidebar = ({
  showSideBar,
  setShowSideBar,
}: {
  showSideBar: boolean;
  setShowSideBar: (showSideBar: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const onEditClickHandler = () => {
    dispatch(setSection({ selectedState: "pvCreate" }));
  };
  return (
    <div
      style={{ padding: showSideBar ? "1rem 0.5rem 1rem 0.5rem" : "0 0 0 0" }}
      className={clsx(
        "border-l dark:border-gray-500 items-center shadow-md transition-all duration-500 max-w-[80px] absolute h-full py-5",
        { "!max-w-[0px]": !showSideBar }
      )}
    >
      <div
        onClick={() => setShowSideBar(!showSideBar)}
        className="absolute top-1/2 left-0 bg-slate-400 h-12 w-5 rounded-l-lg grid place-content-center -translate-x-full -translate-y-1/2 cursor-pointer opacity-40 hover:opacity-100 transition"
      >
        <AiFillCaretRight
          className={clsx("rotate-0 transition duration-500", {
            "rotate-180": !showSideBar,
          })}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center overflow-hidden">
        <div className="flex flex-col gap-4 items-center">
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <BsFillPersonFill />
          </Button>
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <BsFillPeopleFill />
          </Button>
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <BsBroadcastPin />
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button
            onClick={onEditClickHandler}
            variant="ghost"
            className="text-3xl w-14 h-14"
          >
            <FiEdit2 />
          </Button>
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <MdLogout />
          </Button>
          <ThemeToggle />
          <Avatar isOnline={false} imgSrc={test} />
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
