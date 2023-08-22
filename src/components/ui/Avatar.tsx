import { setSelectedProfile } from "@/redux/Slices/appSlice";
import { setShow } from "@/redux/Slices/profileSlice";
import { getBinary } from "@/services/api/chat";
import { merge } from "@/utils/merge";
import { HTMLAttributes, useMemo } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  isOnline?: boolean;
  imgSrc?: string;
  isConversationList?: boolean;
  chatType?: "PV" | "CHANNEL" | "GROUP";
  avatarType?: "USER" | "CHAT";
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

  const { data: binaryData } = useQuery(
    ["binary", imgSrc?.split("/")?.at(-1)],
    () => getBinary(imgSrc),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const fileUrl = useMemo(() => {
    if (!binaryData) return undefined;
    return URL.createObjectURL(binaryData?.data);
  }, [binaryData?.data.size]);

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
              imageUrl: fileUrl,
              profileType: avatarType === "CHAT" ? chatType : "CURRENT_USER",
            },
          })
        );
      }}
      className={merge(
        "w-16 h-16 text-center relative rounded-full cursor-pointer",
        className
      )}
      {...props}
    >
      {isOnline && (
        <div className="absolute w-3 h-3 border rounded-full bg-online top-0 right-0"></div>
      )}

      {fileUrl ? (
        <img className="rounded-full w-full h-full " src={fileUrl} />
      ) : (
        <>
          {avatarType === "CHAT" && (
            <div className="w-full h-full bg-secondary rounded-full grid place-content-center">
              {chatType === "CHANNEL" && (
                <HiSpeakerphone className="w-full h-full text-3xl text-primary" />
              )}
              {chatType === "GROUP" && (
                <BsFillPeopleFill className="w-full h-full text-3xl text-primary" />
              )}
              {chatType === "PV" && (
                <BsFillPersonFill className="w-full h-full text-3xl text-primary" />
              )}
            </div>
          )}
          {avatarType === "USER" && (
            <div className="w-full h-full bg-secondary rounded-full">
              <BsFillPersonFill className="w-full h-full text-4xl text-slate-800" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Avatar;
