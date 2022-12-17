import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { Header } from "~/components/UI/organisms/header";
import { HEADER_HEIGHT } from "~/components/UI/organisms/header/constant";
import { Navigation } from "~/components/UI/organisms/navigation";
import {
  NAVIGATION_TOGGLE_DURATION,
  NAVIGATION_WIDTH,
} from "~/components/UI/organisms/navigation/constant";
import { navigationStates } from "~/components/UI/organisms/navigation/store";
import { COLORS } from "~/styles/colors";

const Layout = ({ children }: PropsWithChildren) => {
  const navigationOpen = useRecoilValue(navigationStates.openAtom);

  return (
    <>
      <Header />
      <Navigation />
      <Box
        sx={(theme) => ({
          backgroundColor: COLORS.BACKGROUND,
          mt: HEADER_HEIGHT,
          transition: `margin-left ${
            NAVIGATION_TOGGLE_DURATION * 1.1
          }ms cubic-bezier(0, 0, 0.2, 1) 0ms`, // Drawer transition strategy
          ...(navigationOpen && {
            ml: NAVIGATION_WIDTH,
          }),

          [theme.breakpoints.up("desktop")]: {
            ml: NAVIGATION_WIDTH,
          },

          [theme.breakpoints.down("tablet")]: {
            ml: undefined,
          },
        })}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
