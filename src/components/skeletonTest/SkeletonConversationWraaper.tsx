import { merge } from "@/utils/merge";
import React from "react";


const SkeletonConversationWraaper = ({ children, className }) => {
  return (
    <div className={merge("h-screen w-80 bg-red-300 overflow-y-auto overflow-x-hidden px-2 duration-500 custom-scrollbar scrollbar-none md:scrollbar", className)}>
      {children}
    </div>
  );
};

export default SkeletonConversationWraaper;
