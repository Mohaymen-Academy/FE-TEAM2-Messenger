import React, { useEffect, useRef, useState } from "react";
type ConversationSectionWrapperProps = {
  children?: React.ReactNode;
  show: boolean;
};
const ConversationSectionWrapper: React.FC<ConversationSectionWrapperProps> = ({
  show,
  children,
}) => {
  const [unmount, setUnmount] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, []);

  useEffect(() => {
    if (
      +wrapperRef.current?.style.opacity! === 0 &&
      wrapperRef.current?.style.transform === "translate(200%, 0px)"
    ) {
      setTimeout(() => {
        setUnmount(true);
      }, 600);
    }
    if (wrapperRef.current?.style.transform === undefined) {
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
