import React, { useEffect, useRef, useState } from "react";
type ConversationSectionWrapperProps = {
  children?: React.ReactNode;
  show: boolean;
};
const ConversationSectionWrapper: React.FC<ConversationSectionWrapperProps> = ({
  show,
  children,
  sectionName,
}) => {
  const [unmount, setUnmount] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(sectionName);
    console.log(wrapperRef.current?.style.transform);
    console.log(wrapperRef.current?.style.opacity!);
    if (
      +wrapperRef.current?.style.opacity! === 0 &&
      wrapperRef.current?.style.transform === "translate(200%, 0px)"
    ) {
      console.log("first");
      setTimeout(() => {
        console.log(sectionName + "is unmounted");
        setUnmount(true);
      }, 600);
    }
    if (wrapperRef.current?.style.transform === undefined) {
      console.log(sectionName + "is mounted");
      setUnmount(false);
    }
  }, [show]);

  if (unmount) return null;

  return (
    <div
      ref={wrapperRef}
      style={{
        opacity: show ? "1" : "0",
        transform: show ? "translate(0, 0)" : "translate(200%, 0)",
        scale: show ? "1" : "0.7",
      }}
      className={
        "flex h-full w-full top-0 left-0 opacity-0 scale-75 translate-x-full transition-all duration-500 absolute"
      }
    >
      {children}
    </div>
  );
};

export default ConversationSectionWrapper;
