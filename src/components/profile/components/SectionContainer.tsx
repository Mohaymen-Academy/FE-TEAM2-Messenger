import { merge } from "@/utils/merge";
import React, { HTMLAttributes } from "react";

interface sectionContainerProps extends HTMLAttributes<HTMLDivElement> {}

const SectionContainer: React.FC<sectionContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={merge(
        className,
        "bg-primary w-[500px] h-screen shadow-lg shadow-slate-900"
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
