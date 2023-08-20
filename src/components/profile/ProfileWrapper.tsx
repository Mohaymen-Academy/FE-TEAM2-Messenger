import { ConversationTypes, StoreStateTypes } from "@/utils/types";
import clsx from "clsx";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import CurrentUserProfile from "./CurrentUserProfile";
import GroupProfile from "./GroupProfile";
import ChannelProfile from "./ChannelProfile";

interface ProfileWrapperProps {
  profileType: "channel" | "currentUser" | "otherUser" | "group";
}

const ProfileWrapper: React.FC<ProfileWrapperProps> = ({
  profileType
}) => {
  const show = useSelector((store: StoreStateTypes) => store.profile.show);
  const selectedConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.selectedConversation
  );
  const profileName =
    selectedConversation && "title" in selectedConversation
      ? selectedConversation.title
      : "";
  return (
    <div
      className={clsx(
        "absolute w-[100%] md:w-[380px] xl:min-w-[380px] xl:static h-screen left-0 top-0 overflow-hidden transition-all shadow-xl z-50",
        { "!w-0 md:!w-0 lg:!w-0 xl:!min-w-0 xl:!w-0": !show }
      )}
    >
      {/* <UserProfile profileName="sadff" /> */}
      {/* <GroupCreator /> */}

      {/* <CurrentUserProfile profileName={profileName} /> */}

      {profileType === "currentUser" ? (
        <CurrentUserProfile profileName={profileName} />
      ) : profileType === "otherUser" ? (
        <UserProfile profileName={profileName} />
      ) : profileType === "group" ? (
        <GroupProfile profileName={profileName} />
      ) : (
        <ChannelProfile profileName={profileName} />
      )}
    </div>
  );
};

export default ProfileWrapper;
