import { Avatar, Button, Paragraph } from "@/components/ui";
import React from "react";
import { ContactTypes } from "@/utils/types";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { getOtherUser, getUserProfile } from "@/services/api/user";
import { useQuery } from "react-query";
import { formatDateDifference } from "@/utils/fromatDate";
import { BiTrash } from "react-icons/bi";

type UserItemProps = {
  user: ContactTypes;
  onClick: () => void;
  withCheck?: boolean;
  checked?: boolean;
  isLoading?: boolean;
  imageUrl?: string;
  haveDeleteButton?: boolean;
  onDeleteClickHandler?: () => void;
};
const UserItem: React.FC<UserItemProps> = ({
  user,
  withCheck,
  onClick,
  checked,
  isLoading,
  imageUrl,
  haveDeleteButton,
  onDeleteClickHandler,
}) => {
  const { data: userData } = useQuery(["user", user.secondUserId], () =>
    getOtherUser(user.secondUserId)
  );
  const { data: userProfileData } = useQuery(
    ["user", user.secondUserId, "profile"],
    () => getUserProfile(user.secondUserId)
  );

  const userProfile = userProfileData?.data[0]?.media?.filePath || imageUrl;
  const userLastSeen =
    formatDateDifference(userData?.data?.lastSeen || user.lastSeen) === "Online"
      ? "آنلاین"
      : formatDateDifference(userData?.data?.lastSeen || user.lastSeen);

  return (
    <div
      className="hover:bg-slate-300 dark:hover:bg-slate-800 p-2 flex gap-4 cursor-pointer mx-2 rounded-lg items-center justify-between group"
      onClick={onClick}
    >
      <div className="flex gap-5 items-center">
        <div className="relative">
          <Avatar
            isOnline={userLastSeen === "آنلاین"}
            imgSrc={userProfile}
            isConversationList={true}
          />
          {withCheck && (
            <div
              style={{ transform: `scale(${checked ? 1.2 : 0})` }}
              className="absolute left-0 bottom-0 text-green-500 bg-black rounded-full transition-all"
            >
              <BsFillCheckCircleFill size={18} />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Paragraph size="lg">{`${user.firstName} ${
            user.lastName ? user.lastName : ""
          }`}</Paragraph>
          {userLastSeen && <Paragraph size="xs">{userLastSeen}</Paragraph>}
        </div>
      </div>

      {isLoading && (
        <Paragraph className="animate-spin ml-6">
          <AiOutlineLoading3Quarters size={30} />
        </Paragraph>
      )}
      {haveDeleteButton && !isLoading && (
        <Button
          onClick={onDeleteClickHandler}
          variant="ghost"
          className="opacity-0 group-hover:opacity-100 ml-2"
        >
          <BiTrash color="red" size={30} />
        </Button>
      )}
    </div>
  );
};

export default UserItem;
