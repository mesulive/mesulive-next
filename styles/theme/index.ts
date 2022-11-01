import { createTheme, Theme as MuiTheme } from "@mui/material";
import { DEFAULT_FONT_FAMILY } from "~/styles/constants";
import { breakpoints } from "~/styles/theme/breakpoints";
import { components } from "~/styles/theme/components";
import { palette } from "~/styles/theme/palette";

export const theme = createTheme({
  typography: {
    fontFamily: DEFAULT_FONT_FAMILY,
  },
  spacing: 1,
  palette,
  components,
  breakpoints,
});

declare module "@emotion/react" {
  interface Theme extends MuiTheme {}
}
