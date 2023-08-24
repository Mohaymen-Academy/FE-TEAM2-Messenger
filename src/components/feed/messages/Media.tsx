import placeHolder from "../../../assets/img/imagePlaceHolder.webp";
import React, { LegacyRef, useMemo, useRef } from "react";
import { useQuery } from "react-query";
import { getBinary } from "@/services/api/chat";

interface ImageProps {
  src: string;
  mediaType: string;
}

const Media: React.FC<ImageProps> = ({ src, mediaType }) => {
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
    if (!binaryData) return null;
    return URL.createObjectURL(binaryData?.data);
  }, [binaryData?.data.size]);

  return (
    <div className="image-message rounded-xl overflow-hidden relative">
      {type === "image" && (
        <>
          <img
            onLoad={(e) => {
              const element = e.target as HTMLImageElement;
              const placeHolderDiv =
                placeHolderRef.current as unknown as HTMLDivElement;

              placeHolderDiv.style.display = "none";
              element.style.position = "static";
              element.style.opacity = "1";
              element.style.filter = "blur(0px)";
            }}
            src={fileUrl ? fileUrl : ""}
            loading="lazy"
            alt="Image"
            className="opacity-0 transition-all duration-500 blur-md h-full absolute"
          />
          <div
            ref={placeHolderRef as LegacyRef<HTMLDivElement>}
            className="bg-white w-full h-full"
          >
            <img src={placeHolder} alt="Media" className=" animate-pulse w-full h-full" />
          </div>
        </>
      )}
      {type === "video" && (
        <video
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
      )}
    </div>
  );
};

export default Media;
