import { DEFAULT_FONT_FAMILY } from "~/styles/constants";
import { ThemeComponents } from "~/styles/types";

export const MuiFormControl: ThemeComponents["MuiFormControl"] = {
  styleOverrides: {
    root: () => ({
      fontFamily: DEFAULT_FONT_FAMILY,
    }),
  },
};
