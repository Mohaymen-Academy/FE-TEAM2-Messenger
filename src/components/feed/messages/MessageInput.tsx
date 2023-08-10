import TextArea from "@/components/feed/input/TextArea";

interface MessageInputProps {}

const MessageInput: React.FC<MessageInputProps> = ({}) => {
  const onSubmitHandler = async () => {};

  return (
    <div className="w-full pb-8 px-5 lg:px-[5%] xl:px-[10%]">
      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <TextArea />
      </form>
    </div>
  );
};

export default MessageInput;
