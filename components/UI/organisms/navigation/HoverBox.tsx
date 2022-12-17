import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import {
  NAVIGATION_LINK_HOVER_BOX_ANIMATION_DURATION,
  NAVIGATION_LINK_HOVER_BOX_CLASSNAME,
} from "~/components/UI/organisms/navigation/constant";
import { navigationStates } from "~/lib/navigation/store";
import { pxArray } from "~/lib/style";
import { COLORS } from "~/styles/colors";

export const HoverBox = () => {
  const { route } = useRouter();

  const top = useRecoilValue(navigationStates.hoverBoxTopAtom);
  const moveAnimated = useRecoilValue(
    navigationStates.hoverBoxMoveAnimatedAtom
  );

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
        transitionDuration: `${NAVIGATION_LINK_HOVER_BOX_ANIMATION_DURATION}ms`,
        transitionTimingFunction: "ease-in-out",
        transitionProperty: `opacity${
          moveAnimated || !["/", "/_error"].includes(route) ? ", top" : ""
        }`,
      }}
      className={NAVIGATION_LINK_HOVER_BOX_CLASSNAME}
    />
  );
};
