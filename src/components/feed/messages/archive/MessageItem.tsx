import Avatar from "@/components/ui/Avatar";
import Paragraph from "@/components/ui/Paragraph";
import clsx from "clsx";
import avatar from "../../../assets/img/avatar.jpg";

interface MessageItemProps {
  message: string;
  sentByCurrentUser: boolean;
  groupMessage: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  sentByCurrentUser,
  groupMessage,
}) => {
  return (
    <div
      className={`
        relative
        p-2
        gap-2
        justify-${sentByCurrentUser ? "end" : "start"}
        ${!sentByCurrentUser && groupMessage && "flex flex-row-reverse"}
      `}
    >
      {!sentByCurrentUser && groupMessage && (
        <div className="flex justify-end self-end">
          <Avatar imgSrc={avatar} className="-mb-1" isOnline />
        </div>
      )}
      <div className="flex flex-col gap-1 w-full relative">
        <div
          className={`flex items-center gap-2
            justify-${sentByCurrentUser ? "start" : "end"}
            ${!sentByCurrentUser && "flex-row-reverse self-end"}
          `}
        ></div>
        <div
          className={`
            flex 
            justify-${sentByCurrentUser ? "start" : "end"}
            relative
          `}
        >
          <div
            className={clsx(
              "px-3 py-1 max-w-[350px] flex break-all flex-col space-y-0 self-start gap-1 relative  rounded-t-xl",
              {
                "rounded-l-xl": sentByCurrentUser,
                "rounded-r-xl": !sentByCurrentUser,
                "bg-blue-500": sentByCurrentUser,
                "bg-teal-400": !sentByCurrentUser,
                "dark:bg-gray-700": !sentByCurrentUser,
              }
            )}
          >
            {!sentByCurrentUser && groupMessage && (
              <Paragraph
                size={"xs"}
                className="font-bold text-white text-left self-start m-0"
              >
                مصطفی
              </Paragraph>
            )}

            <Paragraph size={"sm"} className="text-white m-0">
              {message}
            </Paragraph>
            <Paragraph className="m-0 text-end !text-xs self-end mt-5">
              5:55
            </Paragraph>
            {sentByCurrentUser && (
              <div className="w-0 h-0 absolute bottom-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-blue-500 -right-[10px] border-b-transparent" />
            )}
            {!sentByCurrentUser && (
              <div
                className="w-0 h-0 absolute
                  border-t-[10px] border-t-transparent
                  border-r-[10px] border-r-teal-400
                  dark:border-r-gray-700
                   border-b-transparent bottom-0 -left-[10px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
