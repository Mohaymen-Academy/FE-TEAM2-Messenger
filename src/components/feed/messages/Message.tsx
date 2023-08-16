import React, { useEffect, useRef, useState } from "react";
import Text from "./Text";
import Image from "./Image";
import Voice from "./Audio";
import { Avatar, Paragraph } from "@/components/ui";
import avatar from "../../../assets/img/avatar.jpg";
import clsx from "clsx";
import { BsCheckAll } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { MessageStatus } from "@/utils/types";
import { ClockLoader } from "react-spinners";
import Context from "@/components/ui/Context";
import ClickOutsideWrapper from "@/components/wrappers/ClickOutsideWrapper";



interface MessageProps {
  children: React.ReactNode;
  message: string;
  sentByCurrentUser: boolean;
  groupMessage: boolean;
  messageStatus : MessageStatus;

}


interface MessageComponent extends React.FC<MessageProps> {
  TextMessage?: typeof Text;
  ImageMessage?: typeof Image;
  VoiceMessage?: typeof Voice;
  
}

const Message: MessageComponent = ({ children , message,
  sentByCurrentUser,
  groupMessage,
  messageStatus,
 }) => {
   const [showContextMenu, setShowContextMenu] = useState(false);
   const containerRef = useRef(null);
   const contextMenuRef = useRef(null);
   const [contextMenuX, setContextMenuX] = useState(0);
   const [contextMenuY, setContextMenuY] = useState(0);


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
           e.clientX - containerRef.current.getBoundingClientRect().left
         );
         setContextMenuY(
           e.clientY - containerRef.current.getBoundingClientRect().top
         );
         setShowContextMenu(true);
       }}
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
           <Avatar imgSrc={avatar} className="-mb-1" isOnline />
         </div>
       )}
       <div className="flex flex-col gap-1 w-full relative">
         <div
           className={`
            flex
            items-center
            gap-2
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
               "px-3 py-3 max-w-[350px] flex break-all flex-col space-y-0 self-start gap-1 relative  rounded-t-xl",
               {
                 "rounded-l-xl": sentByCurrentUser,
                 "rounded-r-xl": !sentByCurrentUser,
                 "bg-msg-current": sentByCurrentUser,
                 "bg-msg-other": !sentByCurrentUser,
               }
             )}
           >
             {!sentByCurrentUser && groupMessage && (
               <Paragraph
                 size={"xs"}
                 className="font-bold text-left self-start m-0 text-primary"
               >
                 مصطفی
               </Paragraph>
             )}
             {children}

             <Paragraph size={"sm"} className="text-white m-0">
               {message}
             </Paragraph>
             <div className="self-start items-center flex flex-row-reverse gap-1">
               <Paragraph className="!text-xs">5:55</Paragraph>
               {messageStatus === "SEEN" ? (
                 <BsCheckAll className="text-green-300" />
               ) : messageStatus === "DELIVERED" ? (
                 <BiCheck className="text-green-300" />
               ) : (
                 <ClockLoader size={12} color="#36d7b7" />
               )}
             </div>
             {sentByCurrentUser && (
               <div className="w-0 h-0 absolute bottom-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-lime-100 dark:border-l-purple-900 -right-[10px] border-b-transparent" />
             )}
             {!sentByCurrentUser && (
               <div
                 className="w-0 h-0 absolute
                  border-t-[10px] border-t-transparent
                  border-r-[10px] border-r-gray-100
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



export default Message;





