import React, { useRef, useEffect } from "react";

interface SwipeWrapperProps {
  id: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  children: React.ReactNode;
}

const SwipeWrapper: React.FC<SwipeWrapperProps> = ({
  id,
  onSwipeLeft,
  onSwipeRight,
  children,
}) => {
  const startXRef = useRef<number | null>(null);
  const endXRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    endXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startXRef.current !== null && endXRef.current !== null) {
      const deltaX = endXRef.current - startXRef.current;
      const swipeAmount = Math.abs(deltaX);
      if (deltaX > 0 && swipeAmount > 100) {
        if (onSwipeRight) {
          onSwipeRight();
        }
      } else if (deltaX < 0 && swipeAmount > 100) {
        if (onSwipeLeft) {
          onSwipeLeft();
        }
      }
    }

    // Reset values
    startXRef.current = null;
    endXRef.current = null;
  };

  useEffect(() => {
    const element = document.getElementById(id);

    if (element) {
      element.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      element.addEventListener("touchmove", handleTouchMove, { passive: true });
      element.addEventListener("touchend", handleTouchEnd, { passive: true });

      return () => {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [id, onSwipeLeft, onSwipeRight]);

  return (
    <div id={id} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default SwipeWrapper;
