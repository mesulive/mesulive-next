import { COLORS } from "~/styles/colors";
import { ThemeComponents } from "~/styles/types";

export const MuiOutlinedInput: ThemeComponents["MuiOutlinedInput"] = {
  styleOverrides: {
    root: () => ({
      borderRadius: "10px",
      "&:hover": {
        "&:not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
          {
            borderColor: COLORS.GRAY_3,
          },
      },
    }),
    notchedOutline: () => ({
      transition: "border-color 0.3s ease",
      paddingLeft: 6,
      "& legend span": {
        fontSize: 14 * 0.8,
        fontWeight: 600,
      },
    }),
    input: () => ({
      color: COLORS.GRAY_2,
    }),
  },
};
