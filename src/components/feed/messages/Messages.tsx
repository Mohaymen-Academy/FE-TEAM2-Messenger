import MessageItem from "./MessageItem";

interface MessagesProps {
  userId: string;
  conversationId: string;
}
const Messages: React.FC<MessagesProps> = ({}) => {
  return (
    <div className="flex flex-col justify-end overflow-hidden">
      <div className="flex flex-col-reverse overflow-auto h-full lg:px-[5%] xl:px-[10%] custom-scrollbar ">
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
