import clsx from "clsx";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
type ConversationSectionWrapperProps = {
  children?: React.ReactNode;
  show: boolean;
  section?: "conversations" | "pvCreate" | "publicCreate" | "contactCreate";
};
const ConversationSectionWrapper: React.FC<ConversationSectionWrapperProps> = ({
  show,
  children,
  section,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="section"
          initial={{
            scale: 1,
            x: section === "conversations" ? 0 : 300,
            opacity: 0,
          }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          exit={{
            scale: 1,
            x: section === "conversations" ? 0 : 300,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.4,
            bounce: 0.3,
            delay: section === "conversations" ? 0.05 : 0.05,
          }}
          className={clsx("flex h-full w-full absolute top-0 left-0")}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConversationSectionWrapper;
