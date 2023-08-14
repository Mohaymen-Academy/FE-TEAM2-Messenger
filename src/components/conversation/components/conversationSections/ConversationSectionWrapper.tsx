import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
