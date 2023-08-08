import React from "react";
type ConversationSectionWrapperProps = {
  children?: React.ReactNode;
  show: boolean;
};
const ConversationSectionWrapper: React.FC<ConversationSectionWrapperProps> = ({
  show,
  children,
}) => {
  return (
    <div
      style={{
        opacity: show ? "1" : "0",
        transform: show ? "translate(0, 0)" : "translate(100%, 0)",
        scale: show ? "1" : "0.5",
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
