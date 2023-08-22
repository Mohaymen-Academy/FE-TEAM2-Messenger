import { setSelectedProfile } from "@/redux/Slices/appSlice";
import { setShow } from "@/redux/Slices/profileSlice";
import { merge } from "@/utils/merge";
import { HTMLAttributes } from "react";
import { useDispatch } from "react-redux";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  isOnline?: boolean;
  imgSrc?: string;
  isConversationList?: boolean;
  chatType?: "PV" | "CHANNEL" | "GROUP";
  avatarType?: "USER" | "CHANNEL" | "GROUP";
  chatId?: number;
  userId?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  isOnline,
  className,
  imgSrc,
  isConversationList,
  chatType,
  chatId,
  userId,
  avatarType,
  ...props
}) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        if (isConversationList) return;
        dispatch(setShow({ show: true }));

        dispatch(
          setSelectedProfile({
            selectedProfile: {
              conversationId: chatId,
              conversationType: chatType,
              userId,
            },
          })
        );
      }}
      className={merge(
        "w-16 h-16 text-center relative rounded-full bg-red-600 cursor-pointer",
        className
      )}
      {...props}
    >
      {isOnline && (
        <div className="absolute w-3 h-3 border rounded-full bg-online top-0 right-0 "></div>
      )}
      {imgSrc && <img className="rounded-full w-full h-full " src={imgSrc} />}
    </div>
  );
};

export default Avatar;
