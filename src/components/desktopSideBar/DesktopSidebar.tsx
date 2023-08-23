import { useDispatch, useSelector } from "react-redux";
import { clsx } from "clsx";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { setSection } from "@/redux/Slices/conversationSlice";
import { AnimatedButton, Avatar, Button } from "../ui";
import { StoreStateTypes } from "@/utils/types";
import { BiMoon, BiSun } from "react-icons/bi";
import { setFileterBy } from "@/redux/Slices/appSlice";
import { merge } from "@/utils/merge";
import { toggleTheme } from "@/redux/Slices/appSlice";
import { onOpen } from "@/redux/Slices/modal/logOutModalSlice";
import { queryClient } from "@/providers/queryClientProvider";
import { useQuery } from "react-query";
import { getUserProfile } from "@/services/api/user";

const DesktopSidebar = ({ showSideBar }: { showSideBar: boolean }) => {
  const dispatch = useDispatch();
  const { theme, filterBy } = useSelector(
    (store: StoreStateTypes) => store.app
  );

  const onEditClickHandler = () => {
    dispatch(setSection({ selectedState: "pvCreate" }));
  };

  const onLogOutClickHandler = () => {
    dispatch(onOpen());
  };

  const handleToggleFilter = (filter: "PV" | "GROUP" | "CHANNEL") => {
    dispatch(setFileterBy(filter === filterBy ? undefined : filter));
  };
  const currentUserIdFromCache = queryClient.getQueryData<{
    data: { userId: number };
  }>(["user", "current"])?.data?.userId;

  const data = useQuery(["user", "current", "profile"], () =>
    getUserProfile(currentUserIdFromCache)
  );

  const currentUserProfile = data?.data?.data[0]?.media?.filePath;

  return (
    <div
      style={{
        transition: "background-color 0s, max-width 200ms, padding 200ms",
      }}
      className={clsx(
        "bg-secondary items-center shadow-md  max-w-[50px] md:max-w-[80px] py-3 px-2 md:px-4 relative",
        { "!max-w-[0px]": !showSideBar, "!p-0": !showSideBar }
      )}
    >
      <div className="w-full h-full flex flex-col justify-between items-center overflow-hidden">
        <div className="flex flex-col gap-8 items-center">
          <Button
            variant="ghost"
            className={merge("sidebar-icon-button", {
              "bg-tertiary": filterBy === "PV",
            })}
            onClick={() => handleToggleFilter("PV")}
          >
            <BsFillPersonFill className="icon-button" />
          </Button>
          <Button
            variant="ghost"
            className={merge("sidebar-icon-button", {
              "bg-tertiary": filterBy === "GROUP",
            })}
            onClick={() => handleToggleFilter("GROUP")}
          >
            <BsFillPeopleFill className="icon-button" />
          </Button>
          <Button
            variant="ghost"
            className={merge("sidebar-icon-button", {
              "bg-tertiary": filterBy === "CHANNEL",
            })}
            onClick={() => handleToggleFilter("CHANNEL")}
          >
            <HiSpeakerphone className="icon-button" />
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
            <MdLogout onClick={onLogOutClickHandler} className="icon-button" />
          </Button>
          <AnimatedButton
            FirstIcon={BiSun}
            SecondIcon={BiMoon}
            isActive={theme === "dark"}
            onClick={() => dispatch(toggleTheme())}
          />
          <Avatar
            avatarType="USER"
            imgSrc={currentUserProfile}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
