import { FieldValues, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { BsEmojiLaughing, BsFillSendFill } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import { merge } from "@/utils/merge";
import Emoji from "./Emoji";
import clsx from "clsx";
import { onToggleEmoji, onToggleUpload } from "@/redux/Slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { AiOutlinePaperClip } from "react-icons/ai";
import { GoFileMedia, GoFile } from "react-icons/go";
import { Paragraph } from "@/components/ui";
import HoverWrapper from "@/components/wrappers/HoverWrapper";
import axios from "axios";
import Editor from "@/components/editor";
import { withReact } from "slate-react";
import { createEditor } from "slate";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const TextArea = ({ value }: { value: string }) => {
  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const dispatch = useDispatch();
  const [editor] = useState(() => withReact(createEditor()));

  const showEmoji = useSelector(
    (store: StoreStateTypes) => store.app.showEmoji
  );
  const showUploadMenu = useSelector(
    (store: StoreStateTypes) => store.app.showUploadMenu
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
    <div className="relative flex max-w-full w-full bg-primary px-3 py-2 justify-center items-center gap-2 rounded-lg">
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(onToggleUpload({ show: !showUploadMenu }));
        }}
        variant="ghost"
        size="sm"
        className="group"
      >Upload Menu </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(onToggleUpload({ show: !showUploadMenu }));
          }}
          variant="ghost"
          size="sm"
          className="group"
        >
          <AiOutlinePaperClip className="w-5 h-5" />
          <span className="sr-only">Upload File</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="group"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(onToggleEmoji({ show: !showEmoji }));
          }}
        >
          <BsEmojiLaughing className="w-5 h-5" />
          <span className="sr-only">Add emoji</span>
        </Button>

        <Editor initialValue={initialValue} editor={editor}>

          <Editor.ToolBar />
          <Editor.Input />
        </Editor>
      {/* </div> */}
      <Button variant="ghost" size="sm" className="hover:bg-blue-100 group">
        <BsFillSendFill className="w-5 h-5 text-cyan-700 dark:text-cyan-300" />
        <span className="sr-only">Send message</span>
      </Button>
      
      {/* absolute positioning*/}
      {/* Emoji menu */}
      <Emoji
        editor={editor}
        className={clsx(
          "bottom-16 duration-300 md:absolute right-0 font-normal overflow-hidden h-0 w-full md:w-0 opacity-0",
          { "h-[300px] md:h-[450px] md:w-[400px] opacity-1": showEmoji }
        )}
      />
      {/* upload menu */}
      <div
        className={clsx(
          "bg-secondary flex flex-col gap-2 absolute bottom-[4.4rem] rounded-lg right-2 px-2 py-3 overflow-hidden opacity-0 transition duration-300 scale-0 origin-bottom-right",
          {
            "scale-100 opacity-100": showUploadMenu,
          }
        )}
      >
        <HoverWrapper className="px-2 py-1">
          <label className="w-fullitems-center gap-2 cursor-pointer px-2">
            <input
              className="hidden"
              type="file"
              accept=".jpg, .png, .mp4"
            />

            <Paragraph size="xs" className="w-full flex items-center gap-3">
              <GoFileMedia size={30} />
              آپلود عکس و فیلم
            </Paragraph>
          </label>
        </HoverWrapper>
        <HoverWrapper className="px-2 py-1">
          <label className="w-full items-center gap-2 cursor-pointer px-2">
            <input
              className="hidden"
              type="file"
              onChange={(e) => console.log(e)}
            />

            <Paragraph size="xs" className="w-full flex items-center gap-3">
              <GoFile size={30} />
              آپلود فایل
            </Paragraph>
          </label>
        </HoverWrapper>
      </div>
    </div>
  );
};

export default TextArea;
