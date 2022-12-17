import { INPUT_PADDING } from "~/styles/constants";
import { ThemeComponents } from "~/styles/theme/types";

export const MuiInputBase: ThemeComponents["MuiInputBase"] = {
  styleOverrides: {
    root: () => ({
      height: 44,
      fontSize: 14,
      fontWeight: 500,
    }),
    input: () => ({
      boxSizing: "border-box",
      height: "100%",
      padding: INPUT_PADDING,
      fontWeight: 600,

      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
    }),
  },
};
