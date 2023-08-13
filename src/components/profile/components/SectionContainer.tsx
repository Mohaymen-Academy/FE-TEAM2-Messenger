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
      className={merge(className, "bg-primary w-full h-screen shadow-lg")}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
