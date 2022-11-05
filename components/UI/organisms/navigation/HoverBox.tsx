import { Box } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { NAVIGATION_LINK_HOVER_BOX_CLASSNAME } from "~/components/UI/organisms/navigation/constant";
import { navigationStates } from "~/components/UI/organisms/navigation/store";
import { pxArray } from "~/lib/style";
import { COLORS } from "~/styles/colors";

export const HoverBox = () => {
  const top = useRecoilValue(navigationStates.hoverBoxTopAtom);
  const [firstRendered, setFirstRendered] = useRecoilState(
    navigationStates.hoverBoxFirstRenderedAtom
  );

  useEffect(() => {
    setTimeout(() => setFirstRendered(false), 0);
  }, [setFirstRendered]);

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: 216,
        height: 40,
        p: pxArray(10, 16),
        backgroundColor: COLORS.MAIN_LIGHTER,
        position: "absolute",
        borderRadius: "12px",
        zIndex: -1,
        opacity: 0,
        top,
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-in-out",
        transitionProperty: `opacity${!firstRendered ? ", top" : ""}`,
      }}
      className={NAVIGATION_LINK_HOVER_BOX_CLASSNAME}
    />
  );
};
