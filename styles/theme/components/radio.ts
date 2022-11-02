import { COLORS } from "~/styles/colors";
import { ThemeComponents } from "~/styles/types";

export const MuiRadio: ThemeComponents["MuiRadio"] = {
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

      span: {
        width: 16 * 1.2,
        height: 16 * 1.2,
        color: "unset",
        svg: {
          width: "100%",
          height: "100%",
          color: "unset",
        },
      },
    }),
  },
};
