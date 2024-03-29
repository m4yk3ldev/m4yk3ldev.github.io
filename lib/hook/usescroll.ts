import { useState, useEffect } from "react";
import { IScrollPosition } from "../interfaces/hooks";
const isBrowser = typeof window !== "undefined";

function getScrollPosition() {
  return isBrowser
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 };
}
export default function useScrollPosition() {
  const [position, setScrollPosition] = useState<IScrollPosition>({
    ...getScrollPosition(),
    prevX: getScrollPosition().x,
    prevY: getScrollPosition().y,
  });

  useEffect(() => {
    let requestRunning: null | number = null;

    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition((prevScrollPosition) => {
            return {
              ...getScrollPosition(),
              prevX: prevScrollPosition.x,
              prevY: prevScrollPosition.y,
            };
          });
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return position;
}
