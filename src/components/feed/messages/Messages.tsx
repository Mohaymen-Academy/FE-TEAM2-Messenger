import { toast } from "react-hot-toast";
import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";

interface MessagesProps {
  userId: string;
  conversationId: string;
}
const Messages: React.FC<MessagesProps> = ({}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!messagesEndRef.current || !data) return;
  //   console.log("in use ef");
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // }, [data, messagesEndRef.current]);

  return (
    <div className="flex flex-col justify-end overflow-hidden">
      <div className="flex flex-col-reverse overflow-auto h-full">
        {/* {data.messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} sentByCurrentUser={msg.sender?.id === userId} />
        ))} */}
        <MessageItem message={"سلام"} sentByCurrentUser={true} />
        <MessageItem message={"سلام"} sentByCurrentUser={true} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
        <MessageItem message={"سلام"} sentByCurrentUser={false} />
      </div>
    </div>
  );
};

export default Messages;
