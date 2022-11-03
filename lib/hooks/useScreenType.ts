import { useEffect, useState } from "react";
import { getScreenType } from "~/lib/style";
import { ScreenType } from "~/styles/constants";

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
