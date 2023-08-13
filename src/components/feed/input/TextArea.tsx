import { FieldValues, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { BsEmojiLaughing, BsFillSendFill } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import { merge } from "@/utils/merge";
import Emoji from "./Emoji";
import clsx from "clsx";
import { onToggleEmoji } from "@/redux/Slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";

const TextArea = () => {
  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const dispatch = useDispatch();

  const showEmoji = useSelector(
    (store: StoreStateTypes) => store.app.showEmoji
  );

  const {
    // register,
    // handleSubmit,
    // formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { message: "" },
  });

  const handleTextAreaInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, clientHeight } = event.target;

    const newHeight = (
      scrollHeight > clientHeight ? scrollHeight : "auto"
    ) as string;
    setTextAreaHeight(newHeight);
  };

  return (
    <div className="relative">
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div
        className={merge(
          "flex gap-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 items-center",
          textareaHeight !== "auto" && "items-end"
        )}
      >
        {/* <UploadButton /> */}

        <Button
          variant="ghost"
          size="sm"
          className="group"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(onToggleEmoji({ show: !showEmoji }));
          }}
        >
          <BsEmojiLaughing className="icon w-5 h-5" />
          <span className="sr-only">Add emoji</span>
        </Button>

        <textarea
          id="chat"
          rows={1}
          style={{ height: textareaHeight }}
          onInput={handleTextAreaInput}
          className={merge(
            "mx-2 px-3 py-2.5 w-full text-base text-gray-900 bg-white ring-1 ring-white dark:ring-gray-800 dark:focus:ring-blue-400 rounded-lg border border-gray-300 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white outline-none resize-none leading-6"
          )}
          placeholder="ارسال پیام ..."
        ></textarea>

        <Button variant="ghost" size="sm" className="hover:bg-blue-100 group">
          <BsFillSendFill className="w-5 h-5 text-cyan-700 dark:text-cyan-300" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
      <Emoji
        className={clsx(
          "bottom-16 duration-300 md:absolute right-0 font-normal overflow-hidden h-0 w-full md:w-0 opacity-0",
          { "h-[300px] md:h-[450px] md:w-[400px] opacity-1": showEmoji }
        )}
      />
    </div>
  );
};

export default TextArea;
