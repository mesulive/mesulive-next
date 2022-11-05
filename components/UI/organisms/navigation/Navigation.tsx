import { Box, Drawer, styled, Typography, useTheme } from "@mui/material";
import { useRecoilState } from "recoil";
import Cube from "~/assets/images/cube.svg";
import Flame from "~/assets/images/flame.svg";
import Star from "~/assets/images/star.svg";
import { HEADER_HEIGHT } from "~/components/UI/organisms/header/constant";
import {
  NAVIGATION_TOGGLE_DURATION,
  NAVIGATION_WIDTH,
} from "~/components/UI/organisms/navigation/constant";
import { HoverBox } from "~/components/UI/organisms/navigation/HoverBox";
import { NavLink } from "~/components/UI/organisms/navigation/NavLink";
import { navigationStates } from "~/components/UI/organisms/navigation/store";
import { useScreenType } from "~/lib/hooks/window";
import { pxArray } from "~/lib/style";
import { COLORS } from "~/styles/colors";
import { ScreenType } from "~/styles/constants";

const GroupTypography = styled(Typography)({
  fontSize: 14,
  fontWeight: "bold",
});

export const Navigation = () => {
  const screenType = useScreenType();
  const theme = useTheme();

  const [open, setOpen] = useRecoilState(navigationStates.openAtom);

  return (
    <Drawer
      open={screenType >= ScreenType.desktop ? true : open}
      variant={screenType < ScreenType.tablet ? "temporary" : "persistent"}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          p: pxArray(32, 16),
          zIndex: 20,
          borderRightColor: COLORS.GRAY_6,
          width: NAVIGATION_WIDTH,

          [theme.breakpoints.up("tablet")]: {
            height: `calc(100% - ${HEADER_HEIGHT}px)`,
            top: HEADER_HEIGHT,
          },
        },
      }}
      transitionDuration={NAVIGATION_TOGGLE_DURATION}
    >
      <Box component="nav">
        <GroupTypography>기댓값 계산기</GroupTypography>
        <NavLink href={"/calc/flame"} icon={Flame} sx={{ mt: 16 }}>
          환생의 불꽃
        </NavLink>
        <NavLink
          href={"/calc/cube"}
          externalLink={"https://cubemesu.co"}
          icon={Cube}
          sx={{ mt: 16 }}
        >
          큐브
        </NavLink>
        <GroupTypography sx={{ mt: 32 }}>시뮬레이터</GroupTypography>
        <NavLink
          href={"/sim/starforce"}
          externalLink={"https://mesu.live/sim/starforce"}
          icon={Star}
          sx={{ mt: 16 }}
        >
          스타포스
        </NavLink>
        <NavLink href={"/sim/cube"} disabled icon={Cube} sx={{ mt: 16 }}>
          큐브
        </NavLink>
        <HoverBox />
      </Box>
    </Drawer>
  );
};
