import Button from "../ui/Button";
import { clsx } from "clsx";
import {
  BsBroadcastPin,
  BsFillPeopleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "@/redux/Slices/conversationSlice";
import test from "../../assets/img/darkBg.svg";
import { AnimatedButton, Avatar } from "../ui";
import { StoreStateTypes } from "@/utils/types";
import { BiMoon, BiSun } from "react-icons/bi";
import { toggleTheme } from "@/redux/Slices/appSlice";

const DesktopSidebar = ({ showSideBar }: { showSideBar: boolean }) => {
  const dispatch = useDispatch();
  const theme = useSelector((store: StoreStateTypes) => store.app.theme);
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
      <div className="w-full h-full flex flex-col justify-between items-center overflow-hidden">
        <div className="flex flex-col gap-8 items-center">
          <Button variant="ghost" className="sidebar-icon-button">
            <BsFillPersonFill className="icon-button" />
          </Button>
          <Button variant="ghost" className="sidebar-icon-button">
            <BsFillPeopleFill className="icon-button" />
          </Button>
          <Button variant="ghost" className="sidebar-icon-button">
            <BsBroadcastPin className="icon-button" />
          </Button>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Button
            onClick={onEditClickHandler}
            variant="ghost"
            className="sidebar-icon-button"
          >
            <FiEdit2 className="icon-button" />
          </Button>
          <Button variant="ghost" className="sidebar-icon-button">
            <MdLogout className="icon-button" />
          </Button>
          <AnimatedButton
            FirstIcon={BiSun}
            SecondIcon={BiMoon}
            isActive={theme === "dark"}
            onClick={() => dispatch(toggleTheme())}
          />
          <Avatar className="w-8 h-8" isOnline={false} imgSrc={test} />
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
