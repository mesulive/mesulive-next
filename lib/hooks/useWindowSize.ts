import { useEffect, useState, useTransition } from "react";

export const useWindowSize = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [, startTransaction] = useTransition();

  useEffect(() => {
    const handleResize = () =>
      startTransaction(() => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
