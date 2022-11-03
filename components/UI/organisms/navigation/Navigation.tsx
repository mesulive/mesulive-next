import { Box, Drawer, Typography, useTheme } from "@mui/material";
import { useRecoilState } from "recoil";
import { HEADER_HEIGHT } from "~/components/UI/organisms/header/constant";
import { NAVIGATION_TOGGLE_DURATION } from "~/components/UI/organisms/navigation/constant";
import { navigationStates } from "~/components/UI/organisms/navigation/store";
import { useScreenType } from "~/lib/hooks/window";
import { pxArray } from "~/lib/style";
import { COLORS } from "~/styles/colors";
import { ScreenType } from "~/styles/constants";

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
          height: `calc(100% - ${HEADER_HEIGHT}px)`,

          [theme.breakpoints.up("tablet")]: {
            top: HEADER_HEIGHT,
          },
        },
      }}
      transitionDuration={NAVIGATION_TOGGLE_DURATION}
    >
      <Box component="nav">
        <Typography sx={{ width: 216 }}>Navigation</Typography>
      </Box>
    </Drawer>
  );
};
