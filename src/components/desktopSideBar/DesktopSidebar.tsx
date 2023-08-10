import Button from "../ui/button/Button";
import { clsx } from "clsx";
import ThemeToggle from "../conversation/ThemeToggle";
import {
  BsBroadcastPin,
  BsFillPeopleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
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
      style={{
        transition: "background-color 0s, max-width 200ms, padding 200ms",
      }}
      className={clsx(
        "bg-gray-100 dark:bg-slate-800 items-center shadow-md  max-w-[50px] md:max-w-[80px] py-3 px-2 md:px-4 relative",
        { "!max-w-[0px]": !showSideBar, "!p-0": !showSideBar }
      )}
    >
      <div
        onClick={() => setShowSideBar(!showSideBar)}
        className="absolute top-1/2 left-0 bg-slate-400 h-20 w-5 rounded-l-lg grid place-content-center -translate-x-full -translate-y-1/2 cursor-pointer opacity-40 hover:opacity-100 transition z-50"
      >
        <AiFillCaretRight
          className={clsx("rotate-0 transition duration-500", {
            "rotate-180": !showSideBar,
          })}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center overflow-hidden">
        <div className="flex flex-col gap-8 items-center">
          <Button variant="ghost" className="sidebar-icon-button">
            <BsFillPersonFill />
          </Button>
          <Button variant="ghost" className="sidebar-icon-button">
            <BsFillPeopleFill className="sidebar-icon" />
          </Button>
          <Button variant="ghost" className="sidebar-icon-button">
            <BsBroadcastPin />
          </Button>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Button
            onClick={onEditClickHandler}
            variant="ghost"
            className="sidebar-icon-button"
          >
            <FiEdit2 />
          </Button>
          <Button variant="ghost" className="sidebar-icon-button">
            <MdLogout />
          </Button>
          <ThemeToggle />
          <Avatar className="w-8 h-8" isOnline={false} imgSrc={test} />
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
