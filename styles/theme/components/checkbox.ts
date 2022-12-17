import { COLORS } from "~/styles/colors";
import { ThemeComponents } from "~/styles/types";

export const MuiCheckbox: ThemeComponents["MuiCheckbox"] = {
  styleOverrides: {
    root: () => ({
      padding: 0,
      color: COLORS.GRAY_3,

      "&.Mui-checked": {
        "~ .MuiFormControlLabel-label": {
          color: COLORS.MAIN,
        },
        span: {
          color: COLORS.MAIN,
        },
      },

      svg: {
        width: 16 * (16 / 12),
        height: 16 * (16 / 12),
        color: "unset",
      },
    }),
  },
};
