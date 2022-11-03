import { BreakpointsOptions } from "@mui/material";
import { ScreenType } from "~/lib/style";
import { BREAKPOINTS } from "~/styles/constants";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const breakpoints: BreakpointsOptions = {
  values: {
    tablet: BREAKPOINTS[ScreenType.tablet],
    laptop: BREAKPOINTS[ScreenType.laptop],
    desktop: BREAKPOINTS[ScreenType.desktop],
  },
};
