import React, { useMemo, useRef, useState } from "react";
import Text from "./Text";
import Voice from "./Audio";
import { Avatar, Paragraph } from "@/components/ui";
import clsx from "clsx";
import { BsCheckAll } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { MessageStatus, MessageTypes, subTypes } from "@/utils/types";
import { ClockLoader } from "react-spinners";
import Context from "@/components/ui/Context";
import ClickOutsideWrapper from "@/components/wrappers/ClickOutsideWrapper";
import {
  formatDateDifference,
  formatDateToShamsiYear,
  formatDateToTime,
} from "@/utils/fromatDate";
import { queryClient } from "@/providers/queryClientProvider";

interface MessageComponent {
  children?: React.ReactNode;
  message: MessageTypes;
  conversation?: {
    id?: number;
    type?: "PV" | "GROUP" | "CHANNEL";
  };
  sentByCurrentUser?: boolean;
  groupMessage?: boolean;
  messageStatus?: MessageStatus;
  TextMessage?: typeof Text;
  ImageMessage?: typeof Image;
  VoiceMessage?: typeof Voice;
}
const Message: React.FC<MessageComponent> = ({
  children,
  message,
  sentByCurrentUser,
  groupMessage,
  messageStatus,
  conversation,
  // TextMessage,
  // ImageMessage,
  // VoiceMessage,
}) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const containerRef = useRef(null);
  const contextMenuRef = useRef(null);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);

  const subs = queryClient.getQueryData<{ data: subTypes[] }>([
    "chat",
    conversation?.type,
    conversation?.id?.toString(),
    "subs",
  ]);

  const Sender = useMemo(
    () => subs?.data?.find((sub) => sub.userId === message.userId),
    [JSON.stringify(subs)]
  );

  return (
    <div
      ref={containerRef}
      className={`
        relative
        p-2
        gap-2
        justify-${sentByCurrentUser ? "end" : "start"}
        ${!sentByCurrentUser && groupMessage && "flex flex-row-reverse"}
      `}
      onContextMenu={(e) => {
        e.preventDefault();

        setContextMenuX(
          //@ts-ignore
          e.clientX - containerRef.current.getBoundingClientRect().left
        );
        setContextMenuY(
          //@ts-ignore
          e.clientY - containerRef.current.getBoundingClientRect().top
        );
        setShowContextMenu(true);
      }}
      onClick={() => console.log(message)}
    >
      {showContextMenu && sentByCurrentUser && (
        <div
          ref={contextMenuRef}
          className="absolute"
          style={{
            top: contextMenuY - 150,
            left: contextMenuX,
            zIndex: 10,
          }}
        >
          <ClickOutsideWrapper
            onOutsideClick={() => {
              setShowContextMenu(false);
            }}
          >
            <Context />
          </ClickOutsideWrapper>
        </div>
      )}

      {showContextMenu && !sentByCurrentUser && (
        <div
          ref={contextMenuRef}
          className="absolute"
          style={{
            top: contextMenuY - 100,
            left: contextMenuX,
            zIndex: 10,
          }}
        >
          <ClickOutsideWrapper
            onOutsideClick={() => {
              setShowContextMenu(false);
            }}
          >
            <Context />
          </ClickOutsideWrapper>
        </div>
      )}

      {!sentByCurrentUser && groupMessage && (
        <div className="flex justify-end self-end">
          <Avatar
            isOnline={formatDateDifference(Sender?.lastSeen) === "Online"}
            imgSrc={Sender?.profile.media.filePath}
            className="-mb-1"
          />
        </div>
      )}
      <div className="flex flex-col gap-1 w-full relative">
        <div
          className={`
            flex 
            justify-${sentByCurrentUser ? "start" : "end"}
            relative
          `}
        >
          <div
            className={clsx(
              "px-3 py-3 max-w-[400px] flex break-all flex-col space-y-0 self-start gap-1 relative  rounded-t-xl",
              {
                "rounded-l-xl": sentByCurrentUser,
                "rounded-r-xl": !sentByCurrentUser,
                "bg-msg-current": sentByCurrentUser,
                "bg-msg-other": !sentByCurrentUser,
              }
            )}
          >
            {!sentByCurrentUser && groupMessage && (
              <Paragraph className="!text-[12px] font-bold text-left self-start mb-1 text-primary">
                {Sender?.firstName} {Sender?.lastName}
              </Paragraph>
            )}
            {children}
            <div className="self-start items-center flex flex-row-reverse gap-1">
              <Paragraph className="!text-xs flex gap-2 mt-2">
                <span>{formatDateToTime(message.sendAt)}</span>
                <span>{formatDateToShamsiYear(message.sendAt)}</span>
              </Paragraph>
              {sentByCurrentUser &&
                (messageStatus === "SEEN" ? (
                  <BsCheckAll className="text-teal-800 dark:text-teal-300" />
                ) : messageStatus === "DELIVERED" ? (
                  <BiCheck className="text-teal-800 dark:text-teal-300 mt-2" />
                ) : (
                  <ClockLoader className="mt-2" size={12} color="#36d7b7" />
                ))}
            </div>
            {sentByCurrentUser && (
              <div className="w-0 h-0 absolute bottom-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-lime-100 dark:border-l-purple-900 -right-[8px] border-b-transparent" />
            )}
            {!sentByCurrentUser && (
              <div
                className="w-0 h-0 absolute
                  border-t-[10px] border-t-transparent
                  border-r-[10px] border-r-gray-100
                  dark:border-r-gray-700
                   border-b-transparent bottom-0 -left-[8px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
