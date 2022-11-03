import { COLORS } from "~/styles/colors";
import { ThemeComponents } from "~/styles/theme/types";

export const MuiFormControlLabel: ThemeComponents["MuiFormControlLabel"] = {
  styleOverrides: {
    root: () => ({
      margin: 0,
      color: COLORS.GRAY_3,
    }),
    label: () => ({
      fontSize: 14,
      fontWeight: 600,
      paddingLeft: 6,
      lineHeight: "normal",
    }),
  },
};
