import { FieldValues, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { IoMdImages } from "react-icons/io";
import { BsEmojiLaughing, BsFillSendFill } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import { merge } from "@/utils/merge";
import Emoji from "./Emoji";
import clsx from "clsx";
import Input from "@/components/auth/input/Input";
import UploadButton from "./UploadButton";
import { onToggleEmoji } from "@/redux/Slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import MessageInput from "./MessageInput";
import Controls from "./Controls";

const TextArea = () => {
  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const dispatch = useDispatch();

  const {
    message: { isSelected },
    app: { showEmoji },
  } = useSelector((store: StoreStateTypes) => store);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { message: "" },
  });

  return (
    <div className="relative m-32">
      <Controls
        className={clsx("transition-all duration-300 opacity-0", {
          "-top-10 opacity-100": isSelected,
        })}
      />
      <label htmlFor="chat" className="sr-only">
        پیام شما
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

        <MessageInput />

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
