import { FieldValues, useForm } from "react-hook-form";
import Button from "@/ui/button/Button";
import { IoMdImages } from "react-icons/io";
import { BsEmojiLaughing, BsFillSendFill } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import { merge } from "@/utils/merge";
import Emoji from "./Emoji";
import clsx from "clsx";

const TextArea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { message: "" },
  });

  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleTextAreaInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, clientHeight } = event.target;
    const newHeight = (
      scrollHeight > clientHeight ? scrollHeight : "auto"
    ) as string;
    setTextAreaHeight(newHeight);
  };

  const handleShowEmoji = () => {
    setShowEmoji((previousShowEmoji) => !previousShowEmoji);
  };

  return (
    <div className="relative">
      <Emoji
        className={clsx(
          "absolute bottom-20 hidd transition-all  duration-200 overflow-hidden h-0 w-0",
          { "h-[435px] w-[352px]": showEmoji }
        )}
      />

      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div
        className={merge(
          "flex gap-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 items-center",
          textareaHeight !== "auto" && "items-end"
        )}
      >
        <Button variant="ghost" size="sm" className="group">
          <IoMdImages className="icon" />
          <span className="sr-only">Upload image</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="group"
          onClick={handleShowEmoji}
        >
          <BsEmojiLaughing className="icon w-5 h-5" />
          <span className="sr-only">Add emoji</span>
        </Button>

        <textarea
          id="chat"
          rows={1}
          style={{ height: textareaHeight }}
          onInput={handleTextAreaInput}
          className="block mx-2 px-3 py-2.5 w-full text-base text-gray-900 bg-white ring-1 ring-white
          dark:ring-gray-800 dark:focus:ring-blue-400 rounded-lg border border-gray-300 
           focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white outline-none resize-none leading-6"
          placeholder="ارسال پیام ..."
        ></textarea>

        <Button variant="ghost" size="sm" className="hover:bg-blue-100 group">
          <BsFillSendFill className="w-5 h-5 text-cyan-700 dark:text-cyan-300" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  );
};

export default TextArea;
