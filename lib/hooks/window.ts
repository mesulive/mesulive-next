import { useEffect, useState, useTransition } from "react";
import { getScreenType } from "~/lib/style";
import { ScreenType } from "~/styles/constants";

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
export const useScreenType = () => {
  const [screenType, setScreenType] = useState<ScreenType>(ScreenType.mobile);

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
};
