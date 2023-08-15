import TextArea from "@/components/feed/input/TextArea";
import { StoreStateTypes } from "@/utils/types";
import clsx from "clsx";
import { useSelector } from "react-redux";

interface MessageInputProps {}

const MessageInput: React.FC<MessageInputProps> = ({}) => {
  const onSubmitHandler = async () => {};

  const profileShow = useSelector(
    (store: StoreStateTypes) => store.profile.show
  );

  return (
    <div
      className={clsx(
        "w-full pb-2 px-5 lg:px-[5%] xl:px-[10%] transition-[padding]",
        {
          "xl:!px-2": profileShow,
        }
      )}
    >
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
