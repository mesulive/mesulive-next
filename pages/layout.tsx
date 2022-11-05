import { Box } from "@mui/material";
import { PropsWithChildren, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { Header } from "~/components/UI/organisms/header";
import { HEADER_HEIGHT } from "~/components/UI/organisms/header/constant";
import { Navigation } from "~/components/UI/organisms/navigation";
import {
  NAVIGATION_TOGGLE_DURATION,
  NAVIGATION_WIDTH,
} from "~/components/UI/organisms/navigation/constant";
import { navigationStates } from "~/components/UI/organisms/navigation/store";
import { useScreenType } from "~/lib/hooks/window";
import { COLORS } from "~/styles/colors";
import { ScreenType } from "~/styles/constants";

const Layout = ({ children }: PropsWithChildren) => {
  const screenType = useScreenType();
  const navigationOpen = useRecoilValue(navigationStates.openAtom);

  const marginLeftExists = useMemo(
    () =>
      (() => {
        if (screenType <= ScreenType.mobile) return false;
        if (screenType >= ScreenType.desktop) return true;
        return navigationOpen;
      })(),
    [navigationOpen, screenType]
  );

  return (
    <>
      <Header />
      <Navigation />
      <Box
        sx={{
          backgroundColor: COLORS.BACKGROUND,
          mt: HEADER_HEIGHT,
          transition: `margin-left ${NAVIGATION_TOGGLE_DURATION}ms cubic-bezier(0, 0, 0.2, 1) 0ms`, // Drawer transition strategy

          ...(marginLeftExists && {
            ml: NAVIGATION_WIDTH,
          }),
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
