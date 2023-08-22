import Button from "@/components/ui/Button";
import { BsEmojiLaughing, BsFillSendFill } from "react-icons/bs";
import { LegacyRef, useEffect, useRef, useState } from "react";
import Emoji from "./Emoji";
import clsx from "clsx";
import { onToggleEmoji, onToggleUpload } from "@/redux/Slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes, UserTypes } from "@/utils/types";
import { AiOutlinePaperClip } from "react-icons/ai";
import { GoFileMedia, GoFile } from "react-icons/go";
import { Paragraph } from "@/components/ui";
import HoverWrapper from "@/components/wrappers/HoverWrapper";
import Editor from "@/components/editor";
import { ReactEditor, withReact } from "slate-react";
import { BaseEditor, Transforms, createEditor } from "slate";
import { parseSlateToHtml } from "@/components/editor/serializer";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "react-query";
import { sendMessage } from "@/services/api/chat";
import { queryClient } from "@/providers/queryClientProvider";
import { v4 as uuidv4 } from "uuid";
import UploadFileModal from "@/components/modal/UploadFileModal";
import { onOpen } from "@/redux/Slices/modal/UploadModalSlice";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const TextArea = () => {
  const dispatch = useDispatch();
  const [editor] = useState(() => withReact(createEditor()));
  const [URLSearchParams] = useSearchParams();

  const fileRef = useRef(new FormData());
  const mediaInputRef = useRef<HTMLInputElement>();
  const fileInputRef = useRef<HTMLInputElement>();
  const [mediaMessage, setMediaMessage] = useState("");

  const [fileType, setFileType] = useState<
    | {
        type: "file" | "video" | "image";
        format: string;
        url: string;
      }
    | undefined
  >();

  const start = useRef(0);
  const end = useRef(0);

  const selectedConversation = URLSearchParams.get("conversationId");
  const textObj = useSelector(
    (store: StoreStateTypes) => store.textArea.textObject
  );

  const showEmoji = useSelector(
    (store: StoreStateTypes) => store.app.showEmoji
  );
  const showUploadMenu = useSelector(
    (store: StoreStateTypes) => store.app.showUploadMenu
  );

  const { mutate: sendMessageMutate } = useMutation({
    mutationFn: (formData: FormData) => sendMessage(formData),
    onMutate: (newMessage) => {
      start.current = Date.now();
      const text = newMessage.get("text");
      const userId = queryClient.getQueryData<{ data: UserTypes }>([
        "user",
        "current",
      ])?.data.userId;
      const sendAt = new Date().toISOString();
      // // Optimistic update
      const optimisticData = {
        editedAt: null,
        media: null,
        messageId: uuidv4(),
        sendAt,
        text,
        userId,
      };

      // Update the cache
      queryClient.setQueryData(
        ["user", "current", "conversations", selectedConversation],
        (oldData: any) => {
          return {
            pages: [
              [optimisticData, ...oldData.pages[0]],
              ...oldData.pages.slice(1),
            ],
            pageParams: oldData.pageParams,
          };
        }
      );

      // return optimisticData; // This value will be passed to onSettled
    },
    onSuccess: () => {
      console.log("sent");
      queryClient.invalidateQueries([
        "user",
        "current",
        "conversations",
        selectedConversation,
      ]);

      end.current = Date.now();

      const time = end.current - start.current;
      console.log(time / 1000);
    },
  });

  const clearMessage = (editor: BaseEditor & ReactEditor) => {
    while (editor.children.length > 0) {
      Transforms.removeNodes(editor, {});
    }
    Transforms.insertNodes(editor, {
      type: "paragraph",
      children: [{ text: "" }],
    } as any);
  };

  const onSendClickHandler = () => {
    const text = parseSlateToHtml(textObj);
    clearMessage(editor);
    const messageFormData = new FormData();
    messageFormData.append("text", text as string);
    messageFormData.append("chatId", selectedConversation as string);
    sendMessageMutate(messageFormData);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendClickHandler();
    }
  };

  const onSendFileSubmit = () => {};
  const onFileSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    fileRef.current = new FormData();
    fileRef.current.append("file", file);

    const selectedFileType = (fileRef.current.get("file") as File).type.split(
      "/"
    )[0] as "image" | "video";
    const selectedFileFormat = (fileRef.current.get("file") as File).type.split(
      "/"
    )[1];

    const selectedFileUrl = URL.createObjectURL(file);
    setFileType({
      type: ["video", "image"].includes(selectedFileType)
        ? selectedFileType
        : "file",
      format: selectedFileFormat,
      url: selectedFileUrl,
    });
    dispatch(onOpen());
  };

  return (
    <>
      <div className="relative flex max-w-full w-full bg-primary px-3 py-2 justify-center items-center gap-2 rounded-lg">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(onToggleUpload({ show: !showUploadMenu }));
          }}
          variant="ghost"
          size="sm"
          className="dark:hover:bg-slate-800 group"
        >
          <AiOutlinePaperClip className="w-5 h-5 icon-button" />
          <span className="sr-only">Upload File</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="dark:hover:bg-slate-800 group"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(onToggleEmoji({ show: !showEmoji }));
          }}
        >
          <BsEmojiLaughing className="w-5 h-5 icon-button" />
          <span className="sr-only">Add emoji</span>
        </Button>

        <Editor initialValue={initialValue} editor={editor}>
          <Editor.ToolBar />
          <Editor.Input handleKeyDown={handleKeyDown} />
        </Editor>
        <Button
          onClick={onSendClickHandler}
          variant="ghost"
          size="sm"
          className="dark:hover:bg-slate-800 group"
        >
          <BsFillSendFill className="w-5 h-5 text-cyan-700 dark:text-cyan-300" />
          <span className="sr-only">ارسال پیام</span>
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
            <div
              onClick={() => mediaInputRef.current?.click()}
              className="w-full items-center gap-2 cursor-pointer px-2"
            >
              <input
                ref={mediaInputRef as LegacyRef<HTMLInputElement>}
                onChange={onFileSelectHandler}
                className="hidden"
                type="file"
                accept="image/*, video/*"
                onClick={(e: any) => (e.target.value = "")}
              />

              <Paragraph size="xs" className="w-full flex items-center gap-3">
                <GoFileMedia  size={30} />
                آپلود عکس و فیلم
              </Paragraph>
            </div>
          </HoverWrapper>
          <HoverWrapper className="px-2 py-1">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full items-center gap-2 cursor-pointer px-2"
            >
              <input
                ref={fileInputRef as LegacyRef<HTMLInputElement>}
                className="hidden"
                type="file"
                onChange={onFileSelectHandler}
                onClick={(e: any) => (e.target.value = "")}
              />

              <Paragraph size="xs" className="w-full flex items-center gap-3">
                <GoFile  size={30} />
                آپلود فایل
              </Paragraph>
            </div>
          </HoverWrapper>
        </div>
      </div>
      <UploadFileModal
        onSubmit={onSendFileSubmit}
        fileType={fileType}
        // setMediaMessage={setMediaMessage}
      />
    </>
  );
};

export default TextArea;
