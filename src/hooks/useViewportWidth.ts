import { useState, useEffect } from "react";

function useViewportWidth(): number {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Update the viewport width when the window is resized
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return viewportWidth;
}

export default useViewportWidth;
