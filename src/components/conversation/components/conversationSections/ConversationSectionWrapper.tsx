import clsx from "clsx";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
type ConversationSectionWrapperProps = {
  children?: React.ReactNode;
  show: boolean;
};
const ConversationSectionWrapper: React.FC<ConversationSectionWrapperProps> = ({
  show,
  children,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="section"
          initial={{ scale: 1, x: 400, opacity: 1 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          exit={{ scale: 0.4, x: 400, opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            bounce: 0.3,
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
