import { setSelectedProfile } from "@/redux/Slices/appSlice";
import { setShow } from "@/redux/Slices/profileSlice";
import { merge } from "@/utils/merge";
import { HTMLAttributes } from "react";
import { useDispatch } from "react-redux";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  isOnline?: boolean;
  imgSrc?: string;
  isConversationList?: boolean;
  chatType?: string; // New prop
  chatId?: string | number; // New prop
}

const Avatar: React.FC<AvatarProps> = ({
  isOnline,
  className,
  imgSrc,
  isConversationList,
  chatType,
  chatId,
  ...props
}) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setShow({ show: isConversationList ? false : true }));

        dispatch(
          setSelectedProfile({
            selectedProfile: {
              conversationId: chatId as string,
              conversationType: chatType as "PV" | "CHANNEL" | "GROUP",
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
