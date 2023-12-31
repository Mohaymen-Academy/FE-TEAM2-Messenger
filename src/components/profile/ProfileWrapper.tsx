import { StoreStateTypes } from "@/utils/types";
import clsx from "clsx";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import CurrentUserProfile from "./CurrentUserProfile";
import ChatProfile from "./ChatProfile";

const ProfileWrapper: React.FC = () => {
  const { profileType, conversationId, imageUrl, userId } = useSelector(
    (store: StoreStateTypes) => store.app.selectedProfile
  );
  const show = useSelector((store: StoreStateTypes) => store.profile.show);
  const selectedConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.selectedConversation
  );
  const profileName =
    selectedConversation && "title" in selectedConversation
      ? selectedConversation.title
      : "";

  if (!profileType) return null;
  return (
    <div
      className={clsx(
        "absolute w-[100%] md:w-[380px] xl:min-w-[380px] xl:static h-screen left-0 top-0 overflow-hidden transition-all shadow-xl z-50",
        { "!w-0 md:!w-0 lg:!w-0 xl:!min-w-0 xl:!w-0": !show }
      )}
    >
      {profileType === "CURRENT_USER" && (
        <CurrentUserProfile imgSrc={imageUrl} profileName={profileName} />
      )}
      {profileType === "PV" && (
        <UserProfile
          userId={userId}
          imgSrc={imageUrl}
          profileName={profileName}
        />
      )}
      {["GROUP", "CHANNEL"].includes(profileType) && (
        <ChatProfile
          imgSrc={imageUrl}
          chatId={conversationId}
          profileName={profileName}
          chatType={profileType as "GROUP" | "CHANNEL"}
        />
      )}
    </div>
  );
};

export default ProfileWrapper;
