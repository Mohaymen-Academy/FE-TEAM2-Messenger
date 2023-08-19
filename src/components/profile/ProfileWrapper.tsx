import { StoreStateTypes } from "@/utils/types";
import clsx from "clsx";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import CurrentUserProfile from "./CurrentUserProfile";

const ProfileWrapper = () => {
  const show = useSelector((store: StoreStateTypes) => store.profile.show);
  return (
    <div
      className={clsx(
        "absolute w-[100%] md:w-[380px] xl:min-w-[380px] xl:static h-screen left-0 top-0 overflow-hidden transition-all shadow-xl z-50",
        { "!w-0 md:!w-0 lg:!w-0 xl:!min-w-0 xl:!w-0": !show }
      )}
    >
      {/* <UserProfile profileName="sadff" /> */}
      {/* <GroupCreator /> */}
      <CurrentUserProfile profileName="علی اکبر" />
    </div>
  );
};

export default ProfileWrapper;
