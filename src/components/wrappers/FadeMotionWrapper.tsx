import { AnimatePresence, motion } from "framer-motion";
import React from "react";
interface MotionWrapperProps {
  show: boolean;
  children: React.ReactNode;
}

const FadeMotionWrapper: React.FC<MotionWrapperProps> = ({
  show,
  children,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FadeMotionWrapper;
