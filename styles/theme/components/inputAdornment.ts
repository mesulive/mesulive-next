import { COLORS } from "~/styles/colors";
import { ThemeComponents } from "~/styles/theme/types";

export const MuiInputAdornment: ThemeComponents["MuiInputAdornment"] = {
  styleOverrides: {
    root: () => ({
      "& .MuiTypography-root": {
        color: COLORS.GRAY_4,
        fontWeight: 700,
        wordBreak: "keep-all",
        whiteSpace: "pre",
        fontSize: "inherit",
      },
    }),
  },
};
