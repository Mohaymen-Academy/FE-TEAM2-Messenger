import placeHolder from "../../../assets/img/imagePlaceHolder.webp";
import React, { LegacyRef, useMemo, useRef } from "react";
import { useQuery } from "react-query";
import { getBinary } from "@/services/api/chat";
import { useDispatch } from "react-redux";
import { onMediaOpen, setMediaUrl } from "@/redux/Slices/modalSlice";
import { Paragraph } from "@/components/ui";
import { AiFillFile } from "react-icons/ai";

interface ImageProps {
  src: string;
  mediaType: string;
  name: string;
  isCache?: boolean;
}

const Media: React.FC<ImageProps> = ({ src, mediaType, name, isCache }) => {
  const dispatch = useDispatch();
  const fileId = src?.split("/")?.at(-1);
  const placeHolderRef = useRef<LegacyRef<HTMLDivElement>>();
  const videoPlaceHolderRef = useRef<LegacyRef<HTMLDivElement>>();
  const type = mediaType?.split("/")[0];
  const { data: binaryData } = useQuery(
    ["binary", fileId],
    () => getBinary(src),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const fileUrl = useMemo(() => {
    if (isCache) {
      return src;
    }
    if (!binaryData) return null;
    return URL.createObjectURL(binaryData?.data);
  }, [binaryData?.data.size]);

  const onImageClickHandler = () => {
    if (!fileUrl) return;

    dispatch(setMediaUrl({ url: fileUrl, name }));
    dispatch(onMediaOpen());
  };

  const onFileClickHandler = () => {
    console.log(fileUrl);

    const linkElement = document.createElement("a");
    linkElement.href = fileUrl as string;
    linkElement.setAttribute("download", name);

    linkElement.style.display = "none";
    document.body.appendChild(linkElement);

    linkElement.click();

    document.body.removeChild(linkElement);
  };

  const body = () => {
    if (type === "image")
      return (
        <div onClick={onImageClickHandler}>
          {!isCache && (
            <img
              onLoad={(e) => {
                const element = e.target as HTMLImageElement;
                const placeHolderDiv =
                  placeHolderRef.current as unknown as HTMLDivElement;

                placeHolderDiv.style.display = isCache ? "block" : "none";
                element.style.position = "static";
                element.style.opacity = "1";
                element.style.filter = "blur(0px)";
              }}
              src={fileUrl ? fileUrl : ""}
              loading="lazy"
              alt="Image"
              className="opacity-0 transition-all duration-500 blur-md h-full absolute"
            />
          )}

          <div
            ref={placeHolderRef as LegacyRef<HTMLDivElement>}
            className="bg-white w-full h-full"
          >
            <img
              src={placeHolder}
              alt="Media"
              className=" animate-pulse w-full h-full"
            />
          </div>
        </div>
      );

    if (type === "video")
      return (
        <video
          className="w-full"
          onLoad={(e) => {
            const element = e.target as HTMLImageElement;
            const placeHolderDiv =
              videoPlaceHolderRef.current as unknown as HTMLDivElement;

            placeHolderDiv.style.display = "none !important";
            element.style.position = "static";
            element.style.opacity = "1";
            element.style.filter = "blur(0px)";
          }}
          src={fileUrl ? fileUrl : ""}
          controls
        />
      );

    return (
      <div className="flex gap-4 justify-center items-center">
        <div
          onClick={onFileClickHandler}
          className="w-[70px] rounded-lg relative cursor-pointer dark:hover:bg-slate-300/30 hover:bg-slate-500/30"
        >
          <div className="text-zinc-400 dark:text-purple-200">
            <AiFillFile size={70} />
          </div>
          <Paragraph
            size="xs"
            className="text-white dark:text-black whitespace-nowrap text-ellipsis overflow-hidden text-left absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/3"
          >
            {name.split(".").length > 1 ? name.split(".")?.at(-1) : "File"}
          </Paragraph>
        </div>
        <div dir="ltr" className="max-w-[150px] text-ellipsis">
          <Paragraph className="whitespace-nowrap text-ellipsis overflow-hidden text-left">
            {name}
          </Paragraph>
        </div>
      </div>
    );
  };

  return (
    <div className="image-message rounded-xl overflow-hidden relative">
      {body()}
    </div>
  );
};

export default Media;
